import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PplmService } from '../pplm.service';
import { FileUploadDownloadService } from './file-upload-download.service';

@Component({
  selector: 'app-file-upload-download',
  templateUrl: './file-upload-download.component.html',
  styleUrls: ['./file-upload-download.component.scss']
})
export class FileUploadDownloadComponent implements OnInit {

  fileArr: any = []
  fileForm!: FormGroup
  submitted = false
  // downloadFile: any;
  loading: Boolean = false;
  file: File | null = null;
  shortLink: string = '';
  img!: File;
  uuid: any
  fildID: string = '';
  // fileName: any;
  getDownloadFile: any;
  constructor(private service: FileUploadDownloadService, private toastr: ToastrService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.fileForm = this.formBuilder.group({
      file: [null, Validators.required],
    })
    this.getAllfiles()
  }


  // getDownloadFile(fileID: any) {
  //   this.service.DownloadFile(field).subscribe(res => {
  //     this.downloadFile = res
  //   })

  // }


  onChange(event: any) {
    this.file = event.target.files[0];
    this.img = event.target.files[0];

  }

  onUpload() {
    if (this.file) {
      this.loading = this.loading;
      console.log(this.file);
      this.service.upload(this.file, this.img).subscribe(res => {
        this.toastr.success("File Upload Sucess")
        this.fileForm.reset({})
        // this.getDownloadFile = res.downloadURL,
        //   this.fileName = res.fileName
      },
        (err) => {
          this.toastr.error("Somethin Went Wrong");
        });
    }
  }

  downloadFile(i: any) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.fileArr[i].downloadURL);
    this.toastr.success("file download successfully")
    link.setAttribute('download', this.fileArr[i].fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  get f() { return this.fileForm.controls }

  getAllfiles() {

    this.service.getUploadFile().subscribe(res => {
      this.fileArr = res
      this.toastr.success("File Fetched Successfully")
    },
      (err) => {
        this.toastr.error("Something Went Wrong");
      })
  }

}
