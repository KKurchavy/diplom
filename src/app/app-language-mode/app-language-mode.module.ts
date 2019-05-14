import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageModeComponent } from './language-mode/language-mode.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [LanguageModeComponent],
  exports: [LanguageModeComponent]
})
export class AppLanguageModeModule { }
