import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { DragulaService } from 'ng2-dragula';
import { Word } from './../../../data/word.interface';
import { AppAdminService } from './../../app-admin.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private words$: Observable<Word[]>;
  
  public controlMode$: Observable<boolean>;
  public words: Word[];

  public addWordFlag: boolean = false;
  public removeWordFlag: boolean = false;

  public fg: FormGroup = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    translation: new FormControl('', [Validators.required, Validators.pattern('[а-яА-Я]+')])
  });

  @ViewChild("removeBlock", { read: ElementRef }) removeBlock: ElementRef;

  constructor(
    private adminService: AppAdminService,
    private dragulaService: DragulaService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.controlMode$ = this.adminService.controlMode;
    this.words$ = this.adminService.words;

    this.words$
    .subscribe(data => this.words = data);

    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
  }

  public getMode(value): void {
    this.adminService.setControlMode(value);
  }

  public save(): void {
    console.log('save');
  }

  public addWord(): void {
    this.addWordFlag = !this.addWordFlag;
  }

  public submitNewWord(): void {
    const eng = this.fg.get('word');
    const rus = this.fg.get('translation');

    if(eng.valid && rus.valid) {
      this.adminService.addWord({
        word: eng.value,
        translation: rus.value
      })
      .subscribe(data => console.log(data));
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
    

    if(this.removeBlock && (el === this.removeBlock.nativeElement)) {
      this.adminService.removeWord(e.value)
      .subscribe(data => {
        console.log(data);
        this.renderer.removeChild(el, e);
      });
      
    }
  }
}
