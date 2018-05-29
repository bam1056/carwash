import { Component, OnInit, Input } from '@angular/core';
import { daysOfTheWeek } from '../../../shared/daysOfTheWeek';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})


export class DayComponent implements OnInit {
  @Input() public date: Date;

  constructor() { }

  ngOnInit() { }

}
