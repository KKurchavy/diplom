import { WordResponse } from './../data/word-response';
import { Observable } from 'rxjs/Observable';
import { Word } from './../data/word.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppAdminService {
  private _controlMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//false - education, true - control
  private _words: BehaviorSubject<Word[]>;

  constructor(
    private http: HttpClient
  ) { }

  get controlMode(): Observable<boolean> {
    return this._controlMode.asObservable();
  }
  get words(): Observable<Word[]> {
    return this.http.get<WordResponse>('http://localhost:3130/words')
            .map(({ words }) => words);
  }

  public setControlMode(value: boolean) {
    this._controlMode.next(value);
  }

  public addWord(word: Word): Observable<any> {
    return this.http.post('http://localhost:3130/word', word);
  }

  public getWord(id: string): Observable<Word> {
    return this.http.get<Word>(`http://localhost:3130/word/${id}`);
  }

  public addControlWord(item: any): Observable<any> {
    const { response } = item;
    
    return this.http.post('http://localhost:3130/controlwords', {
      word: response.word,
      translation: response.translation
    });
  }

  public removeWord(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3130/word/${id}`);
  }

  public removeControlWord(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3130/controlwords/${id}`);
  }

  public addWordToControlList(word: Word): Observable<any> {
    return this.http.post('http://localhost:3130/controlwords', word);
  }
}
