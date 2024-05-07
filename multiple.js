const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});

pr5
  .then((value1) => {
    console.log("value1:", value1);
    return "B";
  })
  .then((value2) => {
    console.log("value2:", value2);
    throw Error("There is a problem");
    return "C";
  })
  .then((value3) => {
    console.log("value3:", value3);
    return "D";
  })
  .then((value4) => {
    console.log("value4:", value4);
  })
  .catch((x) => {
    console.log(x);
  })
  .finally(() => {
    console.log("Este es el bloque finally");
  });
