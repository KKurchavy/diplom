import { AppService } from './../app.service';
import { WordResponse } from './../data/word-response';
import { Observable } from 'rxjs/Observable';
import { Word } from './../data/word.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppAdminService {
  private _controlMode: Observable<boolean>;
  private _allPermissions: Observable<boolean>;
  private _words: BehaviorSubject<Word[]>;

  public setControlMode;
  public setAllPermissions;

  constructor(
    private http: HttpClient,
    private service: AppService
  ) {
    this._controlMode = this.service.controlMode;
    this._allPermissions = this.service.allPermissions;
    this.setControlMode = this.service.setControlMode;
  }

  get controlMode(): Observable<boolean> {
    return this._controlMode;
  }
  get allPermissions(): Observable<boolean> {
    return this._allPermissions;
  }
  get words(): Observable<Word[]> {
    return this.http.get<WordResponse>('http://localhost:3130/admin/words')
            .map(({ words }) => words);
  }

  get settings(): Observable<any> {
    return this.http.get('http://localhost:3130/settings');
  }

  public sendSettings(key: string, value: any): Observable<any> {
    return this.settings
      .switchMap(data => {
        data[key] = value;
        return this.http.put('http://localhost:3130/admin/settings', data);
      });
  }

  public addWord(word: Word): Observable<any> {
    return this.http.post('http://localhost:3130/admin/word', word);
  }

  public getWord(id: string): Observable<Word> {
    return this.http.get<Word>(`http://localhost:3130/admin/word/${id}`);
  }

  public addControlWord(item: any): Observable<any> {
    const { response } = item;
    
    return this.http.post('http://localhost:3130/admin/controlwords', {
      word: response.word,
      translation: response.translation
    });
  }

  public removeWord(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3130/admin/word/${id}`);
  }

  public removeControlWord(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3130/admin/controlwords/${id}`);
  }

  public addWordToControlList(word: Word): Observable<any> {
    return this.http.post('http://localhost:3130/admin/controlwords', word);
  }
}
