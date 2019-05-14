import { AppLanguageModeModule } from './../app-language-mode/app-language-mode.module';
import { AppBodyMenuModule } from './../app-body-menu/app-body-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { MatCardModule } from '@angular/material/card';
import { DragulaModule, DragulaService } from 'ng2-dragula'
import { MatButtonModule } from '@angular/material';
import { PlaceDirective } from './place.directive';

@NgModule({
  imports: [
    CommonModule,
    AppBodyMenuModule,
    MatButtonModule,
    MatCardModule,
    DragulaModule,
    AppLanguageModeModule
  ],
  declarations: [BodyComponent, PlaceDirective],
  providers: [DragulaService],
  exports: [BodyComponent]
})
export class AppBodyModule { }
