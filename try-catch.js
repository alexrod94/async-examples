const getData = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const finalRes = await res.json();
    console.log(finalRes);
  } catch (err) {
    console.log(err);
  }
};

getData();
