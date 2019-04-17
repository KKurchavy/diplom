import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { AppService } from './../../app.service';
import { Word } from './../../data/word.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public splitMode: string;
  public word$: Observable<Word>;
  public words$: Observable<Word[]>;
  public engRus: boolean;
  public controlMode$: Observable<boolean>;
  public allPermissions$: Observable<boolean>;
  
  public wordsDone: boolean = false;
  public errors: number = 0;

  constructor(private service: AppService) { }

  ngOnInit() {
    
    this.service.splitMode
    .subscribe(data => this.splitMode = data);

    this.words$ = this.service.controlWords;

    this.word$ = this.words$
    .switchMap(data => {
      return from(data);
    })
    .take(1);

    this.controlMode$ = this.service.controlMode;
    this.allPermissions$ = this.service.allPermissions;
    
    this.service.isEngRus
    .subscribe(data => this.engRus = data);

    this.service.settings
    .finally(() => this.service.changeLoadingWindowState(false))
    .subscribe(data => {
      const { id, controlMode, engRus, splitMode, allPermissions } = data;

      this.service.setControlMode(controlMode);
      this.service.setEngRus(engRus);
      this.service.setSplitMode(splitMode);
      this.service.setAllPermissions(allPermissions);
    });
  }

  public changeTraining(value): void {
    this.service.setSplitMode(value);
    this.splitMode = value;
  }

  public getMode(value): void {
    this.service.setControlMode(value);
  }

  public allWordsDone(value: boolean): void {
    this.wordsDone = value;
  }

  public getErrors(value: number): void {
    this.errors = value;
  }

  public getResult(): any {
    return {...this.service.user, errors: this.errors};
  }

}
