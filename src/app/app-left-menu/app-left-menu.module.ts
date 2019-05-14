import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [LeftMenuComponent],
  exports: [LeftMenuComponent]
})
export class AppLeftMenuModule { }
