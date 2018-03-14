import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-mode',
  templateUrl: './language-mode.component.html',
  styleUrls: ['./language-mode.component.scss']
})
export class LanguageModeComponent {

  constructor(private service: AppService) { }

  public changeLang(value: boolean): void {
    this.service.setEngRus(value);
  }

}
