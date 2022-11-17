import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  reads: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts () {
    this._data.getData('posts', '').subscribe(result => this.reads = result);
  }

  
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

}
