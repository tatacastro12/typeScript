export class myDate {


  constructor(
   public year: number = 1988,
   private _month: number = 10,
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
      this._month += amount
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

  get month() {
    return this._month
  }
   set month(newValue: number){
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue
    }else{
      throw new Error('month out of range');
    }

  }
}

const dateInstance = new  myDate(2023, 4, 10)
 console.log(dateInstance.printFormat());
 dateInstance.month = 4;
 console.log('run',dateInstance.month);

 dateInstance.month = 78;
 console.log('esto no debe aparecer',dateInstance.month);


