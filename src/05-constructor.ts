export class myDate {


   constructor(
    public year: number = 1988,
    public month: number = 10,
    private day: number = 9
    ){}


   printFormat(): string {
    const day = this.addPadding(this.day)
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
       this.day += amount
     }

     if (type === 'months') {
       this.month += amount
     }

     if (type === 'years') {
       this.year += amount
     }
   }
   getDay(){
    return this.day
   }
 }


 const dateInstance = new  myDate(2023, 4, 10)
 console.log(dateInstance.printFormat());
 console.log(dateInstance.getDay());

 const dateInstance2 = new  myDate()
 console.log('() =>', dateInstance2.printFormat());

 const dateInstance3 = new  myDate(2023)
 console.log('(2023) =>', dateInstance3.printFormat());

 const dateInstance4 = new  myDate(2023, 3)
 console.log('(2023, 3) =>', dateInstance4.printFormat());





