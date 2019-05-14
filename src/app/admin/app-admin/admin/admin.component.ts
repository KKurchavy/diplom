import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { Observable } from 'rxjs/Observable';
import { AppService } from './../../../app.service';
import { Word } from './../../../data/word.interface';
import { AppAdminService } from './../../app-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
// let current;
// this.service.changeLoadingWindowState(true);

// return this.adminService.settings
// .switchMap((data) => {
//   current = data.allPermissions;
//   return this.adminService.sendSettings('allPermissions', !current);
// })
// .finally(() => this.service.changeLoadingWindowState(false));
export class AdminComponent implements OnInit {

  private words$: Observable<Word[]>;
  
  public controlMode$: Observable<boolean>;
  public allPermissions$: Observable<boolean>;
  public splitMode$: Observable<string>;
  public engRus$: Observable<boolean>;
  public words: Word[];
  public controlWords: Word[];
  

  public addWordFlag: boolean = false;
  public removeWordFlag: boolean = false;

  public fg: FormGroup = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
    translation: new FormControl('', [Validators.required, Validators.pattern('[а-яА-Я ]+')])
  });

  @ViewChild("removeBlock", { read: ElementRef }) removeBlock: ElementRef;
  @ViewChild("droppable", {read: ElementRef}) droppableList: ElementRef;

  constructor(
    private adminService: AppAdminService,
    private service: AppService,
    private dragulaService: DragulaService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.controlMode$ = this.adminService.controlMode;
    this.allPermissions$ = this.adminService.allPermissions;
    this.engRus$ = this.service.isEngRus;
    this.splitMode$ = this.service.splitMode;
    this.words$ = this.adminService.words;
    
    this.words$
    .subscribe(data => this.words = data);
    this.service.controlWords
    .subscribe(data => this.controlWords = data);

    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
  }

  public getAllPermissions(value): void {
    this.service.changeLoadingWindowState(true);

    this.adminService.sendSettings('allPermissions', value)
    .finally(() => {
      this.service.setAllPermissions(value);
      this.service.changeLoadingWindowState(false);
    })
    .subscribe(data => console.log(data));
  }

  public getMode(value): void {
    this.service.changeLoadingWindowState(true);

    this.adminService.sendSettings('controlMode', value)
    .finally(() => {
      this.service.setControlMode(value);
      this.service.changeLoadingWindowState(false);
    })
    .subscribe(data => console.log(data));
  }

  public getLang(value): void {
    this.service.changeLoadingWindowState(true);

    this.adminService.sendSettings('engRus', value)
    .finally(() => {
      this.service.setEngRus(value);
      this.service.changeLoadingWindowState(false);
    })
    .subscribe(data => console.log(data));
  }

  public getSplit(value): void {
    this.service.changeLoadingWindowState(true);

    this.adminService.sendSettings('splitMode', value)
    .finally(() => {
      this.service.setSplitMode(value);
      this.service.changeLoadingWindowState(false);
    })
    .subscribe(data => console.log(data));   
  }

  public addWord(): void {
    this.addWordFlag = !this.addWordFlag;
  }

  public submitNewWord(): void {
    const eng = this.fg.get('word');
    const rus = this.fg.get('translation');

    if (eng.valid && rus.valid) {
      this.service.changeLoadingWindowState(true);
      this.adminService.addWord({
        word: eng.value,
        translation: rus.value
      })
      .subscribe(data => {
        console.log(data);
        const { word } = data;
        this.words.push(word);
        this.service.changeLoadingWindowState(false);
      });
    }
  }

  public removeWord(): void {
    this.removeWordFlag = !this.removeWordFlag;
  }

  private onDrag(args) {
    let [e, el] = args;
  }

  private onDrop(args): void {
    const [e, el, container, prevEl] = args;
    
    if (this.droppableList && (el == this.droppableList.nativeElement)) {
      this.service.changeLoadingWindowState(true);

      this.adminService.getWord(e.value)
      .switchMap(word => {
        return this.adminService.addControlWord(word)
      })
      .subscribe(data => {
        console.log(data);
        this.service.changeLoadingWindowState(false);
      });
    }

    if (this.removeBlock && (el === this.removeBlock.nativeElement)) {
      this.service.changeLoadingWindowState(true);

      if (container === this.droppableList.nativeElement) {
        this.adminService.removeControlWord(e.value)
        .subscribe(data => {
          console.log(data);
          this.service.changeLoadingWindowState(false);
          this.renderer.removeChild(el, e);
        });
      } else {
        this.adminService.removeWord(e.value)
        .subscribe(data => {
          console.log(data);
          this.service.changeLoadingWindowState(false);
          this.renderer.removeChild(el, e);
        });
      }
      
      
    }
  }
}
