const goToBank = (amount: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    console.log('I am going to the bank');
    setTimeout(() => {
      try {
        console.log('I am at the bank');
        if (!amount) {
          reject(new Error('No money'));
        }
        resolve(amount);
      } catch (error) {
        reject(error);
      }
    }, 10000);
  });
};

const withdrawMoney = (amount: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    console.log('I am withdrawing money');
    setTimeout(() => {
      try {
        console.log('I have withdrawn money');
        // throw new Error('error wa o');
        resolve(amount);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    }, 5000);
  });
}

const goToBuka = (amount: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    console.log('I am going to the buka');
    setTimeout(() => {
      try {
        console.log('I am going to the buka')
        resolve(amount);
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });
}

const payForFood = (amount: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    console.log('I am paying for food');
    setTimeout(() => {
      try {
        console.log('I have paid for food with ' + amount);
        // resolve(amount);
        throw new Error('Dem no collect old notes oooo');
      } catch (e) {
        reject(e);
      }
    }, 3000);

  });
}

const collectFood = (amount: number): Promise<{ amount: number; food: string; }> => {
  return new Promise((resolve) => {
    console.log('I am collecting food');
    setTimeout(() => {
      console.log('I have collected food');
      resolve({ amount, food: 'Chicken Pie' });
    }, 2000);
  });
}

const eatFood = (food: string): Promise<void> => {
  return new Promise(() => {
    console.log(`I am eating ${food}`);
    setTimeout(() => {
      console.log(`I have eaten ${food}`);
    }, 2000);
  });
}

const ErrorHandler = (error: any) => {
  console.log('THERE WAS AN ERROR!!');
  console.log(error);
};
/// CALL
goToBank(1000)
  .then((amount: number) => {
    return withdrawMoney(amount);
  })
  .then((amount: number) => {
    return goToBuka(amount);
  })
  .then((amount: number) => {
    return payForFood(amount);
  })
  .then((amount: number) => {
    return collectFood(amount);
  })
  .then((response: { amount: number; food: string; }) => {
    return eatFood(response.food);
  })
  .catch(ErrorHandler);

async function run(): Promise<void> {
  try {
    const amount1 = await goToBank(1000);
    await withdrawMoney(amount1);
    await goToBuka(amount1);
    await payForFood(amount1);
    const { amount, food } = await collectFood(amount1);
    await eatFood(food);
  } catch (e) {
    ErrorHandler(e);
  }
  // amount1 is the amount that goToBank resolves
}

const purchaseFood = async (amount: number): Promise<number> => {
  await run();
  return amount;
}

purchaseFood(1000);

