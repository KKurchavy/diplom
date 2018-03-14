import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthComponent } from './../../app-auth/auth/auth.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isAdmin$ = this.service.isAdmin;

  constructor(
    private service: AppService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public exit(): void {
    this.router.navigate(['/']);
    this.service.logout();
  }
}
