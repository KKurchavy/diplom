import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-congradilations',
  templateUrl: './congradilations.component.html',
  styleUrls: ['./congradilations.component.scss']
})
export class CongradilationsComponent {

  @Input() errors: number;

}
