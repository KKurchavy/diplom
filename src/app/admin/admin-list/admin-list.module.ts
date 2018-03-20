import { DragulaModule } from 'ng2-dragula';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
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
