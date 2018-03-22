import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material';
import { QueryList, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { PlaceDirective } from './../place.directive';
import { CutWord } from './../../data/cut-word';
import { Word } from './../../data/word.interface';
import { Observable } from 'rxjs/Observable';
import { AppService } from './../../app.service';
import 'rxjs/add/operator/take';
import { from } from 'rxjs/observable/from';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChildren } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

  public cutWord: CutWord;
  public sortWord: string[];

  private swapIdx: number;
  private clearWord: string[];

  @Input() word: Word;
  @Input() words: Word[];
  @Input() splitMode: string;
  @Input() engRus: boolean;
  @Input() controlMode: boolean;
  
  @ViewChildren(PlaceDirective) private dropableElList: QueryList<PlaceDirective>;

  constructor(
    private dragulaService: DragulaService,
    private renderer: Renderer2,
    private snackBar: MatSnackBar
  ) {
  }

  public ngOnInit(): void {
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const splitMode = changes['splitMode'];
    const controlMode = changes['controlMode'];
    const word = changes['word'];

    if ((splitMode || controlMode) && this.word) {
      this.redraw();
    }
    if(word && word.currentValue) {
      this.redraw();
    }


  }

  public getWord(item): void {
    this.word = item;
    this.redraw();
  }

  private redraw(): void {
    this.cutWord = this.cutWordToArray(this.word);
    this.clearWord = this.cleanWord(this.cutWord);
    this.sortWord = [];
    setTimeout(() => {
      this.sortWord = this.sortCutWord(this.clearWord);
    });  
  }

  public checkSpecialSymbols(item: string): boolean {
    return item === ' ' || item === ',' || item === '.' || item === '?';
  }
  
  private onDrag(args) {
    let [e, el] = args;
    
    Array.from(el.children).forEach((v, i) => {
      if(e == v) {
        this.swapIdx = i;
      }
    });
  }

  private onDrop(args): void {
    const [e, el, container, prevEl] = args;

    const qlEl = this.dropableElList.find(({ element }) => element.nativeElement === el);
    const children = Array.from(el.children);
    
    if((prevEl !== null || children.length > 1) && qlEl) {
      const tmp = prevEl === null ? children[0] : prevEl;

      this.swap(this.renderer, e, el, container, tmp);
    }

    if(qlEl) {
      if(!this.checkResult(el) && this.controlMode) {
        this.renderer.setStyle(e, 'background-color', 'red');

        setTimeout(() => {
          this.renderer.removeStyle(e, 'background-color');
        }, 1000);

        this.insert(this.renderer, e, container, el);
      }
    }
  }

  private swap(renderer: Renderer2, element: Element, elemToPlace:Element, elemFromPlace:Element, neighbor:Element): void {
    this.renderer.insertBefore(elemToPlace, element, neighbor);
    this.renderer.removeChild(elemToPlace, neighbor);
    this.renderer.insertBefore(elemFromPlace, neighbor, elemFromPlace.children[this.swapIdx]);
  }

  private insert(renderer: Renderer2, element: Element, elemToPlace:Element, elemFromPlace:Element): void {
    this.renderer.insertBefore(elemToPlace, element, Array.from(elemToPlace.children)[this.swapIdx]);
  }

  private checkResult(el): boolean {
    const arr = [];

    this.dropableElList.forEach(({ element: { nativeElement } }) => {
      if(!nativeElement.classList.contains('empty')) {

        if(nativeElement.children.length > 0) {
          arr.push(nativeElement.children[0].value);
        } else {
          arr.push('_');
        }
      }

    });

    if(this.equal(arr, this.clearWord)) {

      if(arr.join('') === this.clearWord.slice(0, arr.length).join('')) {
        this.snackBar.open('Правильно', 'Ок', {
          duration: 3000
        });
      }

      return true;
    }

    return false;
  }

  private equal(arr1, arr2): boolean {
    let count = 0;

    arr1.forEach((v, i) => {
      if(arr1[i] === arr2[i] || arr1[i] === '_') {
        count++;
      }
    });

    if(count == arr1.length) {
      return true;
    }
    return false;
  }

  private cutWordToArray(item: Word): CutWord {
    const [, word, translation] = Object.values(item).map(item => item.split(this.splitMode));

    return {
      eng: word,
      rus: translation
    }
  }

  private cleanWord(cutWord: CutWord): string[] {
    return cutWord.eng.filter(item => !this.checkSpecialSymbols(item));
  }

  private sortCutWord(arr: string[]): string[] {
    return this.shuffle(arr.slice());
  }

  private shuffle(a: string[]): string[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}