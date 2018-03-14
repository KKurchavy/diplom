import { RouterModule } from '@angular/router';
import { AuthAdminComponent } from './../app-auth-admin/auth-admin/auth-admin.component';
import { AppAuthModule } from './../app-auth/app-auth.module';
import { AppAuthAdminModule } from './../app-auth-admin/app-auth-admin.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { MatDialogModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { AuthComponent } from './../app-auth/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    AppAuthModule,
    AppAuthAdminModule,
    RouterModule,
    MatSnackBarModule
  ],
  declarations: [ StartComponent ],
  exports: [ StartComponent ],
  entryComponents: [
    AuthComponent, 
    AuthAdminComponent
  ]
})
export class AppStartModule { }
