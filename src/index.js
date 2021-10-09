let currentTime = new Date();

let h3 = document.querySelector("#current-date");
let time = document.querySelector("#current-time");

let date = currentTime.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[currentTime.getMonth()];

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

h3.innerHTML = `${day} ${date} ${month}`;
time.innerHTML = `${hours} : ${minutes}`;

function showTemp(response) {
  document.querySelector("#searched-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  let apiKey = "19e50e884302c469aeb0390524919349";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let apiKey = "19e50e884302c469aeb0390524919349";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let button = document.querySelector("button");
button.addEventListener("click", showPosition);
