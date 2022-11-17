import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.sass']
})
export class WriteComponent implements OnInit {
  posts: any;
  frmPost!: FormGroup;
  isSubmitted: boolean = false;
  tempSources: any = [];
  sourceId: any;
  uploadedImage: any;

  constructor(private fb: FormBuilder, private _data: DataService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.frmPost = this.fb.group({
      postId:[''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      sourceId: ['', [Validators.required]],
      status: ['1']
    });

    this._data.getData('sources', '').subscribe(result => {
      this.tempSources = result;
      // console.log(JSON.stringify(result, null, 2));
    });

    this.getPosts();
  }

  getPosts() {
    this._data.getData('posts', '').subscribe(result => {
      this.posts = result;
      // console.log(JSON.stringify(result, null, 2));
    });
  }


  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.uploadedImage = reader.result;
      console.log(JSON.stringify(reader.result, null, 2));
    };
  }
  /**
   * 

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBanner(base64);
    return base64;
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
   */

  onSubmit() {
    console.log(JSON.stringify(this.frmPost.value, null, 2));
    if (this.frmPost.valid && (this.frmPost.value.postId === null || this.frmPost.value.postId === '') ) {
      if ( this.uploadedImage ) this.frmPost.value.image = this.uploadedImage;
      this._data.saveData('posts', this.frmPost.value).subscribe(result => {
        this._toaster.success('Post generated', 'Success')
        this.isSubmitted = true;
        this.uploadedImage = '';
        this.frmPost.reset();
      });
    }
    else {
      this._data.updateData('posts', this.frmPost.value).subscribe(result => {
        this._toaster.success('Post udated successfully', 'Success');
        this.isSubmitted = true;
        this.uploadedImage = '';
        this.frmPost.reset();
      });
    }
    this.getPosts();
  }

  setSource (e: any) {
    this.sourceId?.setValue(e.target.value, {
      onlySelf: true,
    });
   }

  get source () {
    return this.frmPost.get('source');
  }

  onDelete (itemId: string) {
    this._data.deleteData('posts', itemId).subscribe(result => console.log(`item deleted`) );
  }

  onEdit (itemId: string) {
    this._data.getData('posts', itemId).subscribe((result: any) => {
      this._toaster.success('Got the records', 'Success');
      console.log(JSON.stringify(result, null, 2));

      if ( result ) {
        this.frmPost.controls['postId'].setValue(result._id);
        this.frmPost.controls['title'].setValue(result.title);
        this.frmPost.controls['description'].setValue(result.description);
        this.uploadedImage = result.image;
        this.frmPost.controls['sourceId'].setValue(result.sourceId);
      }
    });
  }

}
