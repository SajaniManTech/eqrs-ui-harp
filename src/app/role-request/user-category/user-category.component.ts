import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService} from '../../shared/shared.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  form: FormGroup;
  closeResult: string;
  counties: number[] = [2111, 21112, 21113, 20129, 12345];
  constructor(fb: FormBuilder, private sharedService: SharedService, private modalService: NgbModal){
    this.form = fb.group({
      orgCategory: ['', Validators.required]
    });
  }

  open(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason);
    });
  }

  ngOnInit() {
  }
  setOrgValue() {
    this.sharedService.setSelectedOrg(this.form.controls['orgCategory'].value);
  }
}
