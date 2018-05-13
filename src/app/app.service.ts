import { JWTResponse } from './data/JWTResponse.interface';
import { WordResponse } from './data/word-response';
import { from } from 'rxjs/observable/from';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './data/word.interface';
import { Observable } from 'rxjs/Observable';
import { Student } from './data/student';
import { Admin } from './data/admin';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private url: string = "http://localhost:3130";

  private _isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _user: Student | Admin;
  private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isEngRus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private _controlMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//false - education, true - control
  private _splitMode: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _loadingWindow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _allPermissions: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  //private _words: BehaviorSubject<any[]>; = new BehaviorSubject<any[]>([
  //   { eng: 'tiny', rus: 'крошечный' },
  //   { eng: 'hot', rus: 'горячий' },
  //   { eng: 'favourite', rus: 'любимый' },
  //   { eng: 'foo, bar', rus: 'фу, бар' },
  //   { eng: 'Looking for the, meanings of words', rus: 'Ищете значения слов' }
  //]);

  constructor(
    private http: HttpClient
  ) { }

  get isLogged(): Observable<boolean> {
    return this._isLogged.asObservable();
  }
  get isAdmin(): Observable<boolean> {
    return this._isAdmin.asObservable();
  }
  get isEngRus(): Observable<boolean> {
    return this._isEngRus.asObservable();
  }
  get user(): any {
    return this._user;
  }
  get allPermissions(): Observable<boolean> {
    return this._allPermissions.asObservable();
  }
  get loadingWindow(): Observable<boolean> {
    return this._loadingWindow.asObservable();
  }
  get controlWords(): Observable<Word[]> {
    return this.http.get<WordResponse>(`${this.url}/controlwords`)
              .map(({words}) => words.map((item) => ({...item, done: false})));
  }
  get settings(): Observable<any> {
    return this.http.get<any>(`${this.url}/settings`);
  }
  get splitMode(): Observable<string> {
    return this._splitMode.asObservable();
  }

  get controlMode(): Observable<boolean> {
    return this._controlMode.asObservable();
  }

  public changeLoadingWindowState(value: boolean): void {
    this._loadingWindow.next(value);
  }
  public setEngRus(value: boolean): void {
    this._isEngRus.next(value);
  }

  public setControlMode(value: boolean): void {
    this._controlMode.next(value);
  }

  public setSplitMode(value: string): void {
    this._splitMode.next(value);
  }

  public setAllPermissions(value: boolean): void {
    this._allPermissions.next(value);
  }

  public login(user: Student) {
    this._user = user;
  }

  public setLogged(student: boolean, admin?: boolean): void {
    this._isLogged.next(student);
    this._isAdmin.next(admin);
  }

  public sendStatistic(student: Student, value: any): void {
    this.http.post(`${this.url}/statistics/5adc52ae9e41e9112c3c1de3`, {rofl: 'tut bil yan'})
      .subscribe(d => console.log(d));
    this.http.get(`${this.url}/statistics`)
      .subscribe(d => console.log(d));
    console.log(student);
  }

  public loginAdmin(user: Admin): Observable<any> {
    this._user = user;

    return this.http.post(`${this.url}/login`, {
      username: 'admin@admin.com',//`${user.firstName}_${user.lastName}`,
      password: 'admin'//user.password
    })
    .switchMap((data: JWTResponse) => {
      console.log(data);
      localStorage.setItem('access_token', data.token);
      return this.http.get(`${this.url}/admin/hello`);
    });
  }

  public logout() {
    this._isLogged.next(false);
    this._isAdmin.next(false);
  }

  public loadSettings() {
    this.http.get(`${this.url}/settings`)
    .subscribe(settings => console.log(settings));
  }
}
