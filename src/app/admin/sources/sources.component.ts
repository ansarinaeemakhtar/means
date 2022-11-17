import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  frmSource!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private _fb: FormBuilder, private _data: DataService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.frmSource = this._fb.group({
      source: ['', [Validators.required]],
      status: ['1']
    });
  }

  onSubmit () {
    if (this.frmSource.valid) {
      this._data.saveData('sources', this.frmSource.value).subscribe(result => {
        if (result) {
          this._toaster.success('Source created.', 'Success');
          this.isSubmitted = true;
          this.frmSource.reset();
        }
      })
    }
  }

}
