const directions = [
  "Starting point: Ironhack Paris",
  "← Head northwest on Bd Voltaire toward Rue Léon Frot",
  "← Turn left onto Rue Chanzy",
  "* Café Titon, 34 Rue Titon, 75011 Paris, France",
];

function obtainDirections(step) {
  const timer = Math.floor(Math.random() * 2000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) reject("Instructions not found.");
      else resolve();
    }, timer);
  });
}

async function getCoffee() {
  try {
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);

    // This will result in a rejected Promise as direction step 4 doesn't exist:
    await obtainDirections(4);

    console.log("You arrived at your destination!");
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

getCoffee();
