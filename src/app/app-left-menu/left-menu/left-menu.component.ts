import { AppService } from './../../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  @Output() changeMode: EventEmitter<string> = new EventEmitter<string>();

  public forChars(): void {
    console.log("kek");
    this.changeMode.emit('');
  }

  public forWords(): void {
    console.log("kek");
    this.changeMode.emit(' ');
  }

}
