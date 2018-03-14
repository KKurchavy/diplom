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
    
    this.service.isEngRus
    .subscribe(data => this.engRus = data);
  }

  public changeMode(value): void {
    this.service.setSplitMode(value);
    this.splitMode = value;
  }

}
