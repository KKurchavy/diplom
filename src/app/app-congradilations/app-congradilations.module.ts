import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongradilationsComponent } from './congradilations/congradilations.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [CongradilationsComponent],
  exports: [CongradilationsComponent]
})
export class AppCongradilationsModule { }
