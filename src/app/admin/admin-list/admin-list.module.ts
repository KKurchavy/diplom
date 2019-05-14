import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DragulaModule } from 'ng2-dragula';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    DragulaModule
  ],
  declarations: [AdminListComponent],
  exports: [AdminListComponent]
})
export class AdminListModule { }
