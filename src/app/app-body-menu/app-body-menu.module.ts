import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMenuComponent } from './body-menu/body-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [BodyMenuComponent],
  exports: [BodyMenuComponent]
})
export class AppBodyMenuModule { }
