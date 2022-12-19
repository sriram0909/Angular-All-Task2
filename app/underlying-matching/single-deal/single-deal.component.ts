import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms'


@Component({
  selector: 'app-single-deal',
  templateUrl: './single-deal.component.html',
  styleUrls: ['./single-deal.component.scss']
})
export class SingleDealComponent implements OnInit {

  registerForm!: FormGroup;
  submittedForm!: FormGroup




  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    
    this.registerForm= new FormGroup({
      counterParty: new FormControl("",[Validators.required]),
      // firstName:new FormControl("" ,[Validators.required, Validators.maxLength(50)])

    })
  }

}
