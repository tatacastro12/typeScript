export class animal {
  constructor(public name: string) {}

  move(){
    console.log('Moving along');

  }
  greeting(){
    return `hello, Iam ${this.name}`
  }
}
 const fifi = new animal('fifi');
 fifi.move();
 console.
 log(fifi.greeting());
