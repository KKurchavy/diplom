import { AppStartModule } from './../app-start/app-start.module';
import { StartComponent } from './../app-start/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'dashboard', loadChildren: './../app-main/app-main.module#AppMainModule' },
  { path: 'admin', loadChildren: './../admin/app-admin/app-admin.module#AppAdminModule' }
];

@NgModule({
  imports: [
    CommonModule,
    AppStartModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
