import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-writer-profile',
  templateUrl: './writer-profile.component.html',
  styleUrls: ['./writer-profile.component.scss']
})
export class WriterProfileComponent implements OnInit {
  writerId: number = 0;
  writerDetail: any = {};
  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.writerId = this._route.snapshot.params['id'];
    this._data.getData(`users/${this.writerId}`, '').subscribe(result => this.writerDetail = result);
  }

}
