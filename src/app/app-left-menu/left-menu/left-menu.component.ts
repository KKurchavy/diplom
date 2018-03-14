import { AppService } from './../../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  @Output() changeMode: EventEmitter<string> = new EventEmitter<string>();

  public enum: any = Object.freeze({
    forChars: '',
    forWords: ' '
  });

  public sendMode(value: string): void {
    this.changeMode.emit(value);
  }

}
