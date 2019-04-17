import { Component, Input, OnInit } from '@angular/core';
import { Word } from './../../../data/word.interface';

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