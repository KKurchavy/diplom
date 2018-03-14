import { Admin } from './../../data/admin';
import { AuthAdminComponent } from './../../app-auth-admin/auth-admin/auth-admin.component';
import { AuthComponent } from './../../app-auth/auth/auth.component';
import { AppService } from './../../app.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public projectName = 'Diploma';
  public isLogged$ = this.service.isLogged;

  constructor(
    public dialog: MatDialog,
    private service: AppService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  public openAuthDialog(): void {
    let dialogRef = this.dialog.open(AuthComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.service.login(result);
      this.router.navigate(['/dashboard']);
    });
  }
  public openAuthAdminDialog(): void {
    let dialogRef = this.dialog.open(AuthAdminComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const admin = new Admin(result.firstName, result.lastName, result.password);

      if(admin.checkPassword()) {
        this.service.loginAdmin(admin);
        this.router.navigate(['/dashboard']);
      } else {
        this.snackBar.open('Неправильный пароль', 'Ок', {
          duration: 3000
        });
      }
    });
  }
  public continue(): void {
    this.router.navigate(['/dashboard']);
  }
}
