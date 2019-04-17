import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppAdminService } from './../../admin/app-admin.service';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public isAdmin$ = this.service.isAdmin;
  
  @Input() getControlMode: boolean;
  @Input() inAdminPanel: boolean = false;
  @Input() allPermissions: boolean;

  @Output() sendControlMode: EventEmitter<boolean> = new EventEmitter<boolean>(this.getControlMode);
  @Output() sendAllPermissions: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private service: AppService,
    private router: Router,
    private adminService: AppAdminService
  ) { }

  public changeMode(value: boolean): void {
    this.service.setControlMode(value);
    this.sendControlMode.emit(value);
  }
  public exit(): void {
    this.router.navigate(['/']);
    this.service.logout();
  }
  public goToAdmin(): void {
    this.router.navigate(['/admin']);
  }
  public goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  public setAllPermissions(): void {
    console.log(this.allPermissions);
    this.sendAllPermissions.emit(!this.allPermissions);
  }
}