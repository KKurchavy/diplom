import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-language-mode',
  templateUrl: './language-mode.component.html',
  styleUrls: ['./language-mode.component.scss']
})
export class LanguageModeComponent {

  @Input() allPermissions: boolean;
  @Input() engRus: boolean;

  @Output() changeLanguage: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: AppService) { }

  public changeLang(value: boolean): void {
    this.service.setEngRus(value);
    this.changeLanguage.emit(value);
  }

}
