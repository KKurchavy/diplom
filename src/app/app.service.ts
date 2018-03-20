import { Word } from './data/word.interface';
import { Observable } from 'rxjs/Observable';
import { Student } from './data/student';
import { Admin } from './data/admin';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {

  private _isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _user: any;
  private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isEngRus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private _controlMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//false - education, true - control
  private _splitMode: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _words: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    { eng: 'tiny', rus: 'крошечный' },
    { eng: 'hot', rus: 'горячий' },
    { eng: 'favourite', rus: 'любимый' },
    { eng: 'foo, bar', rus: 'фу, бар' },
    { eng: 'Looking for the, meanings of words', rus: 'Ищете значения слов' }
  ]);

  constructor() {

  }

  get isLogged(): Observable<boolean> {
    return this._isLogged.asObservable();
  }
  get isAdmin(): Observable<boolean> {
    return this._isAdmin.asObservable();
  }
  get isEngRus(): Observable<boolean> {
    return this._isEngRus.asObservable();
  }
  get user() {
    return this._user;
  }
  get words(): Observable<Word[]> {
    return this._words.asObservable();
  }
  get splitMode(): Observable<string> {
    return this._splitMode.asObservable();
  }

  get controlMode() {
    return this._controlMode.asObservable();
  }

  setEngRus(value: boolean) {
    this._isEngRus.next(value);
  }

  setControlMode(value: boolean) {
    this._controlMode.next(value);
  }

  setSplitMode(value: string) {
    this._splitMode.next(value);
  }

  login(user: Student) {
    this._user = user;
    this._isLogged.next(true);
  }

  loginAdmin(user: Admin) {
    this._user = user;
    this._isLogged.next(true);
    this._isAdmin.next(true);
  }

  logout() {
    this._isLogged.next(false);
    this._isAdmin.next(false);
  }
}
