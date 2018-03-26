import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loadingWindowState$: Observable<boolean>;

  constructor(private service: AppService) {}

  public ngOnInit() {
    this.loadingWindowState$ = this.service.loadingWindow;
  }
}
