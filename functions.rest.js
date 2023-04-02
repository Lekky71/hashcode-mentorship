function greetPeople(message, ...people) {
  // console.log(people[2]);
  console.log(people);
  for(const person of people) {
    const toSend = `${message} ${person}, how you dey?`;
    console.log(toSend);
  }
}

function greetStudents(people) { // expecting an array
  // console.log(people);
  return people;
}

// To call greetStudents
// greetStudents(['Bolu', 'Bolu', 'Liberty']);

// To call greetPeople
greetPeople('How far', 'Bolu', 'Bolu', 'Liberty', 'OAU');

const people = ['Bolu', 'Bolu', 'Liberty', 'Peter', 'Ife'];
greetPeople('Yo', people, ['0', 3, 67]);
