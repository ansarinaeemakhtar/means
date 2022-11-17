import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  foundUser: any;
  arrayUser: any;
  constructor(private _data: DataService) { }

  authUser(email: any) {
    // this._data.getData(`users/?email=${email}`).subscribe((result: any) => {
    //   this.foundUser = result.find((u: any) => u.email === email )
    //   return this.foundUser;
    // });
  }
}
