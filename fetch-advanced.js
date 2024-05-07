// CRUD:

// GET
async function getWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  );
  const finalRes = await res.json();
  console.log(finalRes);
}

// POST
async function createWeather() {
  const data = {};
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const finalRes = await res.json();
  console.log(finalRes);
}

// UPDATE

async function createWeather() {
  const data = {};
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const finalRes = await res.json();
  console.log(finalRes);
}

// DELETE
async function createWeather() {
  const data = {};
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
    {
      method: "DELETE",
    }
  );
  const finalRes = await res.json();
  console.log(finalRes);
}
