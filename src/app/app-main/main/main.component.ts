import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Word } from './../../data/word.interface';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

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
    
    this.service.isEngRus
    .subscribe(data => this.engRus = data);

    this.service.settings
    .subscribe(data => {
      const { id, controlMode, engRus, splitMode } = data;
      
      this.service.setControlMode(controlMode);
      this.service.setEngRus(engRus);
      this.service.setSplitMode(splitMode);
      this.service.setAllPermissions(true);// add this to db
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

}
