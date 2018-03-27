import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongradilationsComponent } from './congradilations/congradilations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CongradilationsComponent],
  exports: [CongradilationsComponent]
})
export class AppCongradilationsModule { }
