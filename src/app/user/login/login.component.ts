import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router, private _data: DataService) { }

  ngOnInit(): void {
  }

  loginUser (frmData: any) {
    if (frmData.valid) {
      this._data.getData(`users/?email=${frmData.email}`, '').subscribe((result: any) => {
        if (result.find((u: any) => u.email === frmData.value.email )) localStorage.setItem('token', frmData.value.email);
        this._router.navigate(['admin'])
      });
    }
    // const token = this._auth.authUser(frmData.value);
    // if ( token ) {
    //   console.log('here')
    //   localStorage.setItem('token', token.email); 
    //   this._router.navigate(['/admin'])
    // }
    // else {
    //   this._router.navigate(['/access-denied'])
    // }
  }

}
