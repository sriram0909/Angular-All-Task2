import { Component, OnInit } from '@angular/core';
import { PplmService } from '../pplm.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form1-list',
  templateUrl: './form1-list.component.html',
  styleUrls: ['./form1-list.component.scss']
})
export class Form1ListComponent implements OnInit {

  counterArray: any = []
  id: any
  showSave!: boolean;
  // downloadFile:any;
  // resType: 'blob'
  showUpdate!: boolean;
data: any;
  constructor(private service: PplmService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.getCounter().subscribe(res => {
      this.counterArray = res
      this.toastr.success('add successfully')
      this.showSave = false;
      this.showUpdate = true;
    })
  }
  delete(counterPartyId: any) {
    this.service.deleteById(counterPartyId).subscribe(res => {
      this.toastr.warning("deleted Successfully")
      this.get()
    })
  }

  getDownloadExcel() {
    this.service.getByXL().subscribe(res => {
      this.downloadFile =res
      this.toastr.success("Downloaded Successfully")
    },
   )
  }
  downloadFile(res: any) {
    const contentType = 'application/vnd.openxmlformats-ficedocument.spreadsheetml.sheet';
    const blob = new Blob([res], { type: contentType });
    const url = window.URL.createObjectURL(blob);

    window.open(url);
  }
  // downloadMyFile() {


  //   const link = document.createElement('a');

  //   link.setAttribute('target', '_blank');

  //   link.setAttribute('href', this.downloadFile );

  //   link.setAttribute('download', `products.csv`);

  //   document.body.appendChild(link);

  //   link.click();

  //   link.remove();

  // }
}


