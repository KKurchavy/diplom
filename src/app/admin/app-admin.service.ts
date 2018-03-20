import { Observable } from 'rxjs/Observable';
import { Word } from './../data/word.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppAdminService {
  private _controlMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//false - education, true - control
  private _words: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    { eng: 'tiny', rus: 'крошечный' },
    { eng: 'hot', rus: 'горячий' },
    { eng: 'favourite', rus: 'любимый' },
    { eng: 'foo, bar', rus: 'фу, бар' },
    { eng: 'Looking for the, meanings of words', rus: 'Ищете значения слов' }
  ]);

  constructor() { }

  get controlMode() {
    return this._controlMode.asObservable();
  }
  get words(): Observable<Word[]> {
    return this._words.asObservable();
  }

  setControlMode(value: boolean) {
    this._controlMode.next(value);
  }
}
