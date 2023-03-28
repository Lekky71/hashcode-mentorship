// Benz G-Wagon
// Blue print -> color, engine, tyre color, rim size, chairs, exhaust...
// Liberty => Sky blue, v8, white, 23, cotton, 2
// Bolu Girl => White, v6, black, 23, leather, 3
// Bolu Boy => Black, v6, black, 24, leather, 4

class Car {
  constructor(name, color, eng, tyreColor, rim, chairs, _exhaustCount) {
    this.name = name;
    this.color = color;
    this.engine = eng;
    this.tyreColor = tyreColor;
    this.rimSize = rim;
    this.chairs = chairs;
    this.exhaustCount = _exhaustCount;
  }
}

const libertyCar = new Car('LibertyGWagon', 'Sky Blue', 'V8', 'white', 23, 'Cotton', 2);
// Another way
const libertyCar2 = {
  name: 'LibertyGWagon',
  color: 'Sky Blue',
  engine: 'V8',
  tyreColor: 'white',
  rimSize: 23,
  chairs: 'Cotton',
  exhaust: 2
};
console.log(libertyCar.chairs);

class Student {
  name;
  school;
  department;
  age;
  matricNumber;

  constructor(name, school, department, age, matricNumber) {
  }

  getAge() {
    let age = 5;
    console.log(age);
  }
}

const student = {
  name: 'Liberty',
  school: 'OAU',
  //,,,
};
