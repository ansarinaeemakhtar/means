import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
  @Input() public writerId: number = 0;
  writerDetail: any;
  frmPost = FormGroup;
  constructor(private _http: HttpClient, private _data: DataService) { }

  ngOnInit(): void {
    console.log(`sources/${this.writerId}`)
    // this._data.getData(`users/${this.writerId}`).subscribe(result => this.writerDetail = result);
    this._data.getData(`sources/${this.writerId}`, '').subscribe(result => this.writerDetail = result );
  }

  onSubmit () {

  }

}
