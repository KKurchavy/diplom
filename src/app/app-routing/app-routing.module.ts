import { AppStartModule } from './../app-start/app-start.module';
import { StartComponent } from './../app-start/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGuard } from '../app.guard';
import { AppService } from '../app.service';
import { AdminGuard } from '../admin/admin.guard';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'dashboard', loadChildren: './../app-main/app-main.module#AppMainModule' , canActivate: [AppGuard] },
  { path: 'admin', loadChildren: './../admin/app-admin/app-admin.module#AppAdminModule', canActivate: [AppGuard, AdminGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    AppStartModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppGuard,
    AdminGuard,
    AppService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
