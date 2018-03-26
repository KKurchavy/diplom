import { Word } from './../../data/word.interface';
import { Observable } from 'rxjs/Observable';
import { AppService } from './../../app.service';
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-body-menu',
  templateUrl: './body-menu.component.html',
  styleUrls: ['./body-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyMenuComponent {
  @Output() getWord: EventEmitter<any> = new EventEmitter<any>();

  @Input() public words: Word[] = [];

  pickWord(item: Word): void {
    this.getWord.emit(item);
  }

}
