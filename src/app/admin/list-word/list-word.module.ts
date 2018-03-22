import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWordComponent } from './list-word/list-word.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [ListWordComponent],
  exports: [ListWordComponent]
})
export class ListWordModule { }
