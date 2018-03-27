import { AppCongradilationsModule } from './../app-congradilations/app-congradilations.module';
import { AppNavModule } from './../app-nav/app-nav.module';
import { AppBodyModule } from './../app-body/app-body.module';
import { AppLeftMenuModule } from './../app-left-menu/app-left-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    AppLeftMenuModule,
    AppBodyModule,
    AppNavModule,
    AppCongradilationsModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class AppMainModule { }
