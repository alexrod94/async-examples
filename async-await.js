const getData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const finalRes = await res.json();
  console.log(finalRes);
};

getData();
