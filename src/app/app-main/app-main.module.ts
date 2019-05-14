import { AppCongradilationsModule } from './../app-congradilations/app-congradilations.module';
import { AppNavModule } from './../app-nav/app-nav.module';
import { AppBodyModule } from './../app-body/app-body.module';
import { AppLeftMenuModule } from './../app-left-menu/app-left-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AppLeftMenuModule,
    AppBodyModule,
    AppNavModule,
    AppCongradilationsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent],
  exports: [MainComponent, RouterModule]
})
export class AppMainModule { }
