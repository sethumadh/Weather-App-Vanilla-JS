const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
time = document.querySelector("img.time");
icon = document.querySelector(".icon img");

const updateCity = async function (city) {
  const cityDets = await getCity(city);
  const weather = await getCondition(cityDets.Key);
  return { cityDets, weather };
};
const updateUI = (data) => {
  console.log(data);
  const { cityDets, weather } = data;

  details.innerHTML = `<div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  </div>`;

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }
  time.setAttribute("src", timeSrc);
  iconImg = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconImg);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  localStorage.setItem("city", city);
  cityForm.reset();

  updateCity(city).then((data) => updateUI(data));
});
if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city")).then((data) => {
    updateUI(data);
  });
}
