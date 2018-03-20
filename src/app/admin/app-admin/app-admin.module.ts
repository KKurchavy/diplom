import { MatButtonModule } from '@angular/material/button';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AdminListModule } from './../admin-list/admin-list.module';
import { AppLeftMenuModule } from './../../app-left-menu/app-left-menu.module';
import { AppAdminService } from './../app-admin.service';
import { AppNavModule } from './../../app-nav/app-nav.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AppNavModule,
    AppLeftMenuModule,
    AdminListModule,
    MatListModule,
    DragulaModule,
    MatButtonModule
  ],
  providers: [AppAdminService, DragulaService],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class AppAdminModule { }
