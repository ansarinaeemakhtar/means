import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  reads: any;
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    // this._data.getData('posts').subscribe(result => this.reads = result);
  }

}
