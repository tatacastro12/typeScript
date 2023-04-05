export class animal {
  constructor(public name: string) { }

  move() {
    console.log('Moving along');

  }
  greeting() {
    return `hello, Iam ${this.name}`
  }
}

export class Dog extends animal {
  constructor(
     name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');


    }
  }
}

const fifi = new animal('fifi');
fifi.move();
console.
  log(fifi.greeting());

const cheis = new Dog('cheis', "jhon");
cheis.move();
console.
  log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);


