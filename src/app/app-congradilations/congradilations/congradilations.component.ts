import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-congradilations',
  templateUrl: './congradilations.component.html',
  styleUrls: ['./congradilations.component.scss']
})
export class CongradilationsComponent implements OnInit {

  @Input() info: any;

  constructor(private service: AppService) {
  }

  public ngOnInit(): void {
    this.service.sendStatistic(this.service.user, {});
  }

}
