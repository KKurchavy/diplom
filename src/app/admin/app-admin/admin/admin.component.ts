import { DragulaService } from 'ng2-dragula';
import { Word } from './../../../data/word.interface';
import { AppAdminService } from './../../app-admin.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public controlMode$: Observable<boolean>;
  public words$: Observable<Word[]>;

  constructor(
    private adminService: AppAdminService,
    private dragulaService: DragulaService
  ) { }

  ngOnInit() {
    this.controlMode$ = this.adminService.controlMode;
    this.words$ = this.adminService.words;

    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
  }

  public getMode(value): void {
    this.adminService.setControlMode(value);
  }

  private onDrag(args) {
    let [e, el] = args;
    
    console.log(args);
  }

  private onDrop(args): void {
    const [e, el, container, prevEl] = args;

    console.log(args);
  }
}
