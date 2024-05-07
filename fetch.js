// async function getWeather() {
//   const res = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
//   );
//   const finalRes = await res.json();
//   console.log(finalRes);
//   document.querySelector(
//     "#weather"
//   ).innerHTML = `La temperatura en Madrid es de ${finalRes.current.temperature_2m}`;
// }

function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  )
    .then((res) => res.json())
    .then((finalRes) => {
      document.querySelector(
        "#weather"
      ).innerHTML = `La temperatura en Madrid es de ${finalRes.current.temperature_2m}`;
    });
}

document.querySelector("#getWeather").addEventListener("click", getWeather);
