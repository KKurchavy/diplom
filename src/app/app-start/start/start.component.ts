import { Admin } from "./../../data/admin";
import { AuthAdminComponent } from "./../../app-auth-admin/auth-admin/auth-admin.component";
import { AuthComponent } from "./../../app-auth/auth/auth.component";
import { AppService } from "./../../app.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import "rxjs/add/operator/finally";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"]
})
export class StartComponent implements OnInit {
  public projectName = "VsuLingvo";
  public isLogged$ = this.service.isLogged;

  constructor(
    public dialog: MatDialog,
    private service: AppService,
    private router: Router,
    private snackBar: MatSnackBar,
    private appService: AppService,
  ) {}

  ngOnInit() {}

  public openAuthDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: "350px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.service.login(result);
      this.service.setLogged(true);
      this.service.changeLoadingWindowState(true);
      this.router.navigate(["/dashboard"]);
    });
  }
  public openAuthAdminDialog(): void {
    const dialogRef = this.dialog.open(AuthAdminComponent, {
      width: "350px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      const admin = new Admin(
        result.firstName,
        result.lastName,
        result.password
      );

      this.appService.loginAdmin(admin)
        .subscribe(() => {
          this.service.changeLoadingWindowState(true);
          this.service.setLogged(true, true);
          this.router.navigate(["/dashboard"]);
        },() => {
          this.snackBar.open("Неправильный пароль", "Ок", {
            duration: 3000
          });
        });

      /* if (!admin.checkPassword()) {
        this.snackBar.open("Неправильный пароль", "Ок", {
          duration: 3000
        });
      } else {
        this.service.loginAdmin(admin).subscribe(data => {
          this.service.changeLoadingWindowState(true);
          this.service.setLogged(true, true);
          this.router.navigate(["/dashboard"]);
        });
      } */
    });
  }
  public continue(): void {
    this.router.navigate(["/dashboard"]);
  }
}
