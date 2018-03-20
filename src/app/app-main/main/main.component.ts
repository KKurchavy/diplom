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
  public word: Word;
  public words$: Observable<Word[]>;
  public engRus: boolean;
  public controlMode$: Observable<boolean>;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.splitMode
    .subscribe(data => this.splitMode = data);

    this.service.words
    .switchMap(data => from(data))
    .take(1)
    .subscribe(word => {
      this.word = word;
    });

    this.words$ = this.service.words;
    this.controlMode$ = this.service.controlMode;
    
    this.service.isEngRus
    .subscribe(data => this.engRus = data);
  }

  public changeTraining(value): void {
    this.service.setSplitMode(value);
    this.splitMode = value;
  }

  public getMode(value): void {
    this.service.setControlMode(value);
  }

}
