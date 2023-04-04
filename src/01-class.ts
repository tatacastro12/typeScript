const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1988, 9, 9); //0 enero 11 dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

export class myDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const dateInstance = new  myDate(2023, 3, 12)
console.log(dateInstance);

