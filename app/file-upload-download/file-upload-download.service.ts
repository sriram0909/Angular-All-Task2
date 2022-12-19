import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadDownloadService {

  private _Url = "http://172.25.91.51:8080/file/getAllFiles"
  private _apiURL = "http://172.25.91.51:8080/file/upload"

  constructor(private http: HttpClient) { }

  upload(file: any, img: any): Observable<any>{

    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('image', img, img.name);
    return this.http.post(this._apiURL, formData);
  }

  getUploadFile() {
    return this.http.get<any>(this._Url)
  }
}
