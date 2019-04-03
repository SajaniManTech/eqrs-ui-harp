import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoleRequestComponent } from './role-request/role-request.component';
import { UserCategoryComponent } from './role-request/user-category/user-category.component';
import { ProductComponent } from './role-request/product/product.component';
import { OrganizationComponent } from './role-request/organization/organization.component';
import { RoleComponent } from './role-request/role/role.component';
import { SummaryComponent } from './role-request/summary/summary.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import {appRouting} from './app-routing.module';
import {routing} from './role-request/role-request-routing.module';
import {SharedService} from './shared/shared.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RoleRequestComponent,
    UserCategoryComponent,
    ProductComponent,
    OrganizationComponent,
    RoleComponent,
    SummaryComponent,
    ProgressTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting,
    routing,
    NgbModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
