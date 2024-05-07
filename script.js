// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Ironhack");
//   }, 2000);
// });

// pr1
//   .then((x) => console.log("Resolved with: ", x))
//   .catch((err) => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((data) => {
    return data.json();
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
