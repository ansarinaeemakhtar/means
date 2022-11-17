import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  pageTitle: string = 'Dashboard';
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe((data: any) => this.pageTitle = data['title']);
  }

}
