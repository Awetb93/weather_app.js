const form = document.getElementById("form");
const input = document.getElementById("input");
const weatherEl = document.getElementById("weather");
const error = document.getElementById("error");
let term = "";
const search = "!";
const getData = search => {
  fetch(`/weather?address=${search}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        setTimeout(() => {
          error.textContent = data.error;
        }, 3000);
      } else {
        console.log(data.location);
        console.log(data.forecast);
        weatherEl.textContent = data.location + data.forecast;
      }
    });
  });
};

const submit = e => {
  e.preventDefault();
  getData(term);
  input.value = "";
};

form.addEventListener("submit", submit);
input.addEventListener("change", e => {
  term = e.target.value;
});
