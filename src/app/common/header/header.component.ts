import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _loader: LoaderService, private _router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn () {
    return localStorage.getItem('token');
  }

  onLogout () {
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}
