import { Component, OnInit } from '@angular/core';
import { months } from '../../shared/months';
import { daysOfTheWeek } from '../../shared/daysOfTheWeek';
import { debug } from 'util';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  public currentMonth: number;
  public currentMonthName: string;
  public currentYear: number;
  public numberOfDays: number;
  public daysOfTheWeek = daysOfTheWeek;
  public dates: number[];
  public week1: Date[] = [];
  public week2: Date[] = [];
  public week3: Date[] = [];
  public week4: Date[] = [];
  public week5: Date[] = [];
  public weeks: object[] = [];

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.setMonthProperties(date);
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  setMonthProperties(date: Date) {
    this.setCurrentMonth(date);
    this.setCurrentMonthName();
    this.setCurrentYear(date);
    this.setNumberOfDaysInTheMonth(date);
    this.setDatesArray();
    this.constructWeeksOfMonth();
    this.weeks = [
      this.week1,
      this.week2,
      this.week3,
      this.week4,
      this.week5
    ];
    console.log(this.weeks);
  }

  setCurrentMonth(date: Date) {
    this.currentMonth = date.getMonth();
  }

  setCurrentMonthName() {
    this.currentMonthName = months[this.currentMonth];
  }

  setCurrentYear(date: Date) {
    this.currentYear = date.getFullYear();
  }

  setNumberOfDaysInTheMonth(date: Date) {
    this.numberOfDays = this.daysInMonth(date.getMonth() + 1, this.currentYear);
  }

  setDatesArray() {
    this.dates = new Array(this.numberOfDays);
  }

  constructWeeksOfMonth() {
    for (let i = 0; i < this.dates.length; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);

      if (i <= 6) {
        this.week1.push(date);
      } else if ( i > 6 && i < 14) {
        this.week2.push(date);
      } else if (i >= 14 && i < 21) {
        this.week3.push(date);
      } else if (i >= 21 && i < 28) {
        this.week4.push(date);
      } else {
        this.week5.push(date);
      }
    }
  }

}
