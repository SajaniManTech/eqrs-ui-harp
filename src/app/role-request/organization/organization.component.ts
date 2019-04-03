import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  selectedOrg: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.selectedOrg = this.sharedService.getSelectedOrg();
  }

}
