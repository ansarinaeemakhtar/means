import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-full-read',
  templateUrl: './full-read.component.html',
  styleUrls: ['./full-read.component.scss']
})
export class FullReadComponent implements OnInit {
  article: any = {};
  articleId: number = 0;
  writerId: number = 0;
  writerName: string = '';
  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleId = this._route.snapshot.params['id'];
    this._data.getData(`posts/${this.articleId}`, '').subscribe((result: any) => {
      console.log(JSON.stringify(result, null, 2));
      this.article = result;
      this.writerId = result['sourceId'];
      console.log(this.writerId);

      this._data.getData(`sources/${this.writerId}`, '').subscribe((result: any) => this.writerName = result.source )
    });
  }

}
