import { Word } from './../../../data/word.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss']
})
export class ListWordComponent implements OnInit {

  @Input() item: Word

  constructor() { }

  ngOnInit() {
  }

}