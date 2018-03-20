import { Word } from './../../../data/word.interface';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit{
  @Input() items: Word[];

  ngOnInit() {
  }
}