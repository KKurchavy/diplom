import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-congradilations',
  templateUrl: './congradilations.component.html',
  styleUrls: ['./congradilations.component.scss']
})
export class CongradilationsComponent implements OnChanges {

  @Input() info: any;

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      console.log(changes.info);
    }
  }

}
