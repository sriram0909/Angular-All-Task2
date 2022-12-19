import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PplmService {

  private _ApiUrl = 'http://172.25.91.51:8080/counterParty/'
  private _ApiURL = "http://172.25.91.51:8080/api/upload"
  // private _create = 'http://172.25.91.51:8080/counterParty/saveCounterParty';

  // private _getcounter = 'http://172.25.91.51:8080/counterParty/counterPartyName';

  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post<any>(this._ApiUrl + '' + 'saveCounterParty', data)
  }

  getCounter() {
    return this.http.get<any>(this._ApiUrl + '' + 'counterPartyName')
  }
  getByID(id: any) {
    return this.http.get<any>(this._ApiUrl + '' + id)
  }
  update(id: any, data: any) {
    return this.http.put<any>(this._ApiUrl + '' + id, data)
  }
  deleteById(id: any) {
    return this.http.delete<any>(this._ApiUrl + '' + id)
  }

  getByXL() {
    return this.http.get<any>(this._ApiUrl + '' + 'dowloadExcel')
  }

  upload(file: any, img: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('image', img, img.name);
    return this.http.post(this._ApiURL, formData);
  }

} 
