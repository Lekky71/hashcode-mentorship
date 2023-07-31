// async goAndWithdraw();
// buyFood();

// goAndWithdraw((err, money) => {
//  if (err) {
//  console.log(err);
//  }
//  if (data) {
//  buyFood(money, (err, food) => {
//  if (err) {
//  console.log(err);
//  }
//  if (data) {
//  }
//  });
//  }
// });

// goToBank();
//    withdrawMoney();
//      goToBuka();
//        payForFood();
//          collectFood();
//             eatFood();

const goToBank = (amount: number, callbackFunction0: Function) => {
  console.log('I am going to the bank');
  setTimeout(() => {
    console.log('I am at the bank');
    callbackFunction0(undefined, amount);
  }, 10000);
}

const withdrawMoney = (amount: number, callbackFunction1: Function) => {
  console.log('I am withdrawing money');
  setTimeout(() => {
    console.log('I have withdrawn money');
    callbackFunction1(undefined, amount);
  }, 5000);
}

const goToBuka = (amount: number, callbackFunction2: Function) => {
  console.log('I am going to the buka');
  setTimeout(() => {
    console.log('I am at the buka');
    callbackFunction2(undefined, amount);
  }, 15000);
}

const payForFood = (amount: number, callbackFunction3: Function) => {
  console.log('I am paying for food');
  setTimeout(() => {
    console.log('I have paid for food');
    callbackFunction3(undefined, amount);
  }, 3000);
}

const collectFood = (amount: number, callbackFunction4: Function) => {
  console.log('I am collecting food');
  setTimeout(() => {
    console.log('I have collected food');
    callbackFunction4(undefined, amount, 'Chicken Pie');
  }, 2000);
}

const eatFood = (amount: number, food: string) => {
  console.log(`I am eating ${food}`);
  setTimeout(() => {
    console.log(`I have eaten ${food}`);
  }, 2000);
}

// CALLBACK HELL
goToBank(1000, (err: Error, amount: number) => {
  if (err) {
    console.log(err);
    throw err;
  }
  if (amount) {
    withdrawMoney(amount, (err: Error, amount: number) => {
      if (err) {
        console.log(err);
        throw err;
      }
      if (amount) {
        goToBuka(amount, (err: Error, amount: number) => {
          if (err) {
            console.log(err);
            throw err;
          }
          if (amount) {
            payForFood(amount, (err: Error, amount: number) => {
              if (err) {
                console.log(err);
                throw err;
              }
              if (amount) {
                collectFood(amount, (err: Error, amount: number, food: string) => {
                  if (err) {
                    console.log(err);
                    throw err;
                  }
                  if (amount) {
                    eatFood(amount, food);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
