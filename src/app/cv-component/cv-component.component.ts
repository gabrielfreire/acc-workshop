import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvUploaderService } from './cv-uploader.service';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  
  cvFile: any;
  form = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    cv:""
  }
  constructor(private cvService: CvUploaderService) { }

  ngOnInit() {

  }

  uploadCv(){
    this.cvService.cvUpload(this.form.cv).subscribe((res) => {
      console.log(res);
      console.log(this.form);
    }, (err) => {
      console.log(err);
      console.log(this.form);
    });
  }

}
