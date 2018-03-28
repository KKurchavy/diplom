import { Observable } from 'rxjs/Observable';
import trainings from './../../data/trainings.array';
import { AppService } from './../../app.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})

export class LeftMenuComponent {

  public mods: any = trainings;

  @Input() splitMode: Observable<boolean>;
  @Input() allPermissions: Observable<boolean>;

  @Output() changeMode: EventEmitter<string> = new EventEmitter<string>();

  public sendMode(value: string): void {
    this.changeMode.emit(value);
  }

}