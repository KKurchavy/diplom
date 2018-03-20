import { AdminComponent } from './../admin/app-admin/admin/admin.component';
import { AppAdminModule } from './../admin/app-admin/app-admin.module';
import { StartComponent } from './../app-start/start/start.component';
import { AppStartModule } from './../app-start/app-start.module';
import { AppTestModule } from './../app-test/app-test.module';
import { AppMainModule } from './../app-main/app-main.module';
import { TestComponent } from './../app-test/test/test.component';
import { MainComponent } from './../app-main/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'dashboard', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AppMainModule,
    AppTestModule,
    AppStartModule,
    AppAdminModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
