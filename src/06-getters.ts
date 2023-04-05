export class myDate {


  constructor(
   public year: number = 1988,
   public month: number = 10,
   private _day: number = 9
   ){}


  printFormat(): string {
   const day = this.addPadding(this._day)
   const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

private addPadding(value: number){
 if (value <= 10) {
   return `0${value}`

 }
 return `${value}`;
}

  add(amount: number, type: 'days' | 'months'| 'years'){
    if (type === 'days') {
      this._day += amount
    }

    if (type === 'months') {
      this.month += amount
    }

    if (type === 'years') {
      this.year += amount
    }
  }
  get day(){
   return this._day
  }
 get isLeapYear(): boolean{
if (this.year % 400 === 0) return true;
if (this.year % 100 === 0) return false;
return this.year % 4 === 0;
  }
}

const dateInstance = new  myDate(2023, 4, 10)
 console.log(dateInstance.printFormat());
 //console.log(dateInstance.getDay());
console.log(dateInstance.day);
console.log('2023' ,dateInstance.isLeapYear);

const dateInstance2 = new  myDate(2000, 4, 10)
console.log('2000', dateInstance2.isLeapYear);

const dateInstance3 = new  myDate(2001, 4, 10)
console.log('2001', dateInstance3.isLeapYear);

const dateInstance4 = new  myDate(2004, 4, 10)
console.log('2004', dateInstance4.isLeapYear);
