export class myDate {
 year: number;
 month: number;
 day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'months'| 'years'){
    if (type === 'days') {
      this.day += amount
    }

    if (type === 'months') {
      this.month += amount
    }

    if (type === 'years') {
      this.year += amount
    }
  }
}const dateInstance = new  myDate(2023, 4, 15)
console.log(dateInstance.day);
dateInstance.day = 20;
console.log(dateInstance.day);
