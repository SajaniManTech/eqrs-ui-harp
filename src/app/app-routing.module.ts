import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
