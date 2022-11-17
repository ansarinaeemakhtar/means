import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  @Input() id: string = '';
  sourceName = '';
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getData(`sources/${this.id}`, '').subscribe((result: any) => this.sourceName = result.source)
  }

}
