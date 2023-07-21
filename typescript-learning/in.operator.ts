type Fish = { swim: () => void, name: string, dive: () => void };
type Bird = { fly: () => void };

// in operator
function move(animal: Fish | Bird) {
  if ("name" in animal) { // Narrowing to Fish
    return animal.dive();
  }

  return animal.fly();
}

// instanceof operator
class Car {
  name;

  constructor(name: string) {
    this.name = name;
  }

  drive(): void {
    console.log('Driving a car');
  }
}

class SportCar extends Car {
  drive(): void {
    console.log('Driving a sport car');
  }

  driveFast(): void {
    console.log('Driving a sport car fast');
  }
}

const bolusCar = new SportCar('BMX X6');
console.log(bolusCar.name);
console.log(bolusCar instanceof SportCar);
console.log(bolusCar instanceof Car);

class CustomError {
  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  show(): void {
    console.log(this.code);
    console.log(this.message);
  }
}

class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message, 404);
  }
}

class UserNotFoundError extends NotFoundError {
  constructor() {
    super('Woooo, we no find the user noo');
  }
}

const notFoundError = new NotFoundError('Customer not found');
notFoundError.show();

console.log(notFoundError instanceof CustomError);


const weNoFindUser = new UserNotFoundError();
weNoFindUser.show();

console.log(weNoFindUser instanceof NotFoundError);
console.log(weNoFindUser instanceof CustomError);

const f3: SportCar | Car = new Car('Toyota Corolla');

if (f3 instanceof SportCar) {
  f3.driveFast();
} else {
  f3.drive();
}
/*
 GrandParent
 Parent
 Child
 */

let f4: Car | NotFoundError;

f4 = new NotFoundError('We no find am o');

if (f4 instanceof NotFoundError) {
  f4.show();
}
