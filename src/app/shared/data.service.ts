import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getData(item: string, itemId: string) {
    return itemId !== null ? this._http.get(`${baseUrl}/${item}/${itemId}`) : this._http.get(`${baseUrl}/${item}`);;
  }

  saveData (item: string, itemData: any) {
    console.log(item, itemData);
    return this._http.post(`${baseUrl}/${item}`, itemData);
  }

  updateData (item: string, itemData: any) {
    // console.log(JSON.stringify(itemData, null, 2))
    return this._http.patch(`${baseUrl}/${item}/${itemData.postId}`, itemData);
  }

  deleteData(item: string, itemData: any) {
    return this._http.delete(`${baseUrl}/${item}/${itemData}`);
  }
}
