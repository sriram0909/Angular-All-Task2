import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { throws } from 'assert';
import { PplmService } from '../pplm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-pplm-form1',
  templateUrl: './pplm-form1.component.html',
  styleUrls: ['./pplm-form1.component.scss']
})
export class PplmForm1Component implements OnInit {
  countArr: any = []
  submittedForm!: FormGroup
  submitted = false
  id: any;
  counterObj: any = {}
  ref: any;
  buttonText = "save"
  constructor(private formBuilder: FormBuilder, private pplm: PplmService, private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.counterObj = {};
    this.id = this.activatedRoute.snapshot.params['id']
    if (this.id) {
      this.getByID()
    }
    this.submittedForm = this.formBuilder.group({
      counterPartyId: [null],
      counterPartyName: [null, Validators.required],
      dealId: [null, Validators.required],
      ref: this.formBuilder.group({
        reference_1: [null, Validators.required],
        reference_2: [null, Validators.required],
        reference_3: [null, Validators.required]
      }),
      deal: this.formBuilder.group({
        dealDate: [null, Validators.required],
        ppOrSE: [null, Validators.required],
        activity: [null, Validators.required],
        deal_source: [null, Validators.required]
      }),
      maturity_date: [null, Validators.required],
      currency: [null, Validators.required],
      amount: [null, Validators.required],
      cancellation_date: [null, Validators.required],

    })
    this.getCount()


  }
  Onsubmit() {
    this.submitted = true
    if (this.submittedForm.invalid) {
      this.toastr.info('Fill all required fields')
    }
    if (this.submittedForm.value.counterPartyId) {
      this.pplm.update(this.id, this.submittedForm.value).subscribe(res => {
        this.toastr.success("update successfully")
        this.router.navigate(['pplm-formlist'])
      })
    }
    else {
      this.pplm.create(this.submittedForm.value).subscribe(res => {
        this.toastr.success('create successfully')
        this.router.navigate(['pplm-formlist'])

      })
    }
  }
  getCount() {
    this.pplm.getCounter().subscribe(res => {
      this.countArr = res
    })
  }
  dateLessThan(dealDate: any, cancellation_date: any) {
    return (group: FormGroup): { [key: string]: any } => {
      let f = group.controls[dealDate];
      let t = group.controls[cancellation_date];
      if (f.value < t.value) {
        return {
          dates: "Date from should be greater than Date to"
        };
      }
      return {};
    }
  }
  reset() {
    this.submittedForm.reset({})
  }
  get f() {
    return this.submittedForm.controls
  }
  getByID() {
    this.buttonText="update"
    this.pplm.getByID(this.id).subscribe(res => {
      // console.log("res:::", res.deal);
      // console.log("res:::", res.ref);
      this.counterObj = res
      this.toastr.success("Data Fetched Successfully")
      this.submittedForm.patchValue({
        counterPartyId: res.counterPartyId,
        counterPartyName: res.counterPartyName,
        currency: res.currency,
        amount: res.amount,
        cancellation_date: res.cancellation_date,
      })
      this.submittedForm.controls['ref'].patchValue({
        // ref_id: res.res.ref_id,
        reference_1: res.ref.reference_1,
        reference_2: res.ref.reference_2,
        reference_3: res.ref.reference_3,


      })
      this.submittedForm.controls['deal'].patchValue({
        deal_source: res.deal.deal_source,
        dealDate: res.deal.dealDate,
        ppOrSE: res.deal.ppOrSE,
        activity:res.deal.activity,


      })
     
    })
  }
}

