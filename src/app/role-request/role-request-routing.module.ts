import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, NgModule} from '@angular/core';
import {UserCategoryComponent} from './user-category/user-category.component';
import {RoleComponent} from './role/role.component';
import {OrganizationComponent} from './organization/organization.component';
import {SummaryComponent} from './summary/summary.component';
import {ProductComponent} from './product/product.component';
import {RoleRequestComponent} from './role-request.component';


const roleRequestRoutes: Routes = [
  { path: '', redirectTo: 'user-category', pathMatch: 'full'},
  // { path: '**', component: UserCategoryComponent},
  { path: 'role', component: RoleComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'product', component: ProductComponent},
  { path: 'user-category', component: UserCategoryComponent }
];
export const roleRequestRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(roleRequestRoutes);
