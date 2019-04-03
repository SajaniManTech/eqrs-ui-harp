import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private selectedOrg: string;

  constructor() { }

  setSelectedOrg(state: any) {
    this.selectedOrg = state;
  }
  getSelectedOrg(): string {
    return this.selectedOrg;
  }
}
