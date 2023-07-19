export const names = ['Liberty', 'Bolu', 'Honour'];

names.forEach((name: string) => {
  console.log(name);
});

const studentA = {
  matricNum: 'U2015/3020001',
  name: 'Liberty',
  cgpa: 2.1,
};

// interface
interface Student {
  matricNum: string;
  name: string;
  cgpa: number;
}

interface BMWX6 {
  color: string;
  year: number;
  isAutomatic: boolean;
  isFourWheelDrive: boolean;
  isConvertible: boolean;
}

const libertyX6: BMWX6 = {
  color: 'purple',
  year: 2023,
  isAutomatic: true,
  isFourWheelDrive: false,
  isConvertible: true,
}

interface Table {
  color: string;
  height: number;
  width: number;
  material: string;
}

interface Hub {
  server: string;
  numberOfTables: number;
  numberOfPeople?: number;
  hasRecessArea: boolean;
  hasMeetingRoom?: boolean; // adding ? makes it optional
}

const opoloHub: Hub = {
  server: 'Cisco',
  numberOfTables: 20,
  numberOfPeople: 30,
  hasRecessArea: true,
}

const opoloHubOsogbo: Hub = {
  server: 'Cisco',
  numberOfTables: 20,
  numberOfPeople: 30,
  hasRecessArea: true,
  hasMeetingRoom: true,
}

const mayhavenHub: {
  server: string;
  numberOfTables: number;
  numberOfPeople?: number;
  hasRecessArea: boolean;
  hasMeetingRoom?: boolean; // adding ? makes it optional
} = {
  server: 'Cisco',
  numberOfTables: 10,
  numberOfPeople: 20,
  hasRecessArea: false,
  hasMeetingRoom: true,
}

function buyFood(request: { food: string, quantity: number, price: number, note?: string }) {
  console.log(request.food);
  console.log(request.quantity);
  console.log(request.price);
}

buyFood({ food: 'Rice', quantity: 2, price: 1000 });
buyFood({ food: 'Beans', quantity: 1, price: 500, note: 'tell mama Sarah to add big fish oooo' });
buyFood({ food: 'Grocery', quantity: 5, price: 50, });

interface Laptop {
  model: string;
  color: string;
  processorSpeed: number;
  ramInGB: number;
  touchScreen: boolean;
  chargerType: string;
  keyboardLight?: string; // yellow, green, red, blue, if undefined, there is no keyboard light
}

const boluLaptop: Laptop = {
  model: 'HP',
  color: 'Silver',
  processorSpeed: 2.75,
  ramInGB: 8,
  touchScreen: false,
  chargerType: 'PIN mouth',
};

console.log(boluLaptop.keyboardLight);

interface House {
  type: string;
  numberOfRooms: number;
  color: string;
  hasTelevision: boolean;
  hasLibrary?: boolean;
  hasOffice: boolean;
  familyCar: BMWX6;
  trees: string[];
}

const honourHouse: House = {
  type: 'Bungalow',
  numberOfRooms: 4,
  color: '`White',
  hasTelevision: true,
  // hasLibrary: false,
  hasOffice: true,
  familyCar: libertyX6,
  trees: ['Mango', 'Orange', 'Pawpaw'],
};

console.log(honourHouse.type);


// UNION TYPES
let x3: number | string;
let x4: number | string | boolean;
let x5: Hub | House | Laptop | BMWX6;

x5 = libertyX6;
console.log(x5.color);

x5 = honourHouse;
console.log(x5.type);

x3 = 34;
console.log(typeof x3);
if (typeof x3 === 'number') {
  console.log(x3 + 5);
}

const human = {
  name: 'Leke',
  head: {
    size: 24,
    color: 'black',
    hair: {
      color: 'black',
      length: 5,
      isCurly: false,
    }
  }
};
// define above with nested interfaces
interface Human {
  name: string;
  head: Head;
}

interface Head {
  size: number;
  color: string;
  hair: Hair;
}

interface Hair {
  color: string;
  length: number;
  isCurly: boolean;
}
