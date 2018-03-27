import { AppService } from './../../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-mode',
  templateUrl: './language-mode.component.html',
  styleUrls: ['./language-mode.component.scss']
})
export class LanguageModeComponent {

  @Output() changeLanguage: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: AppService) { }

  public changeLang(value: boolean): void {
    this.service.setEngRus(value);
    this.changeLanguage.emit(value);
  }

}
