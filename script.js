document
  .getElementById("search_btn")
  .addEventListener("click", function (event) {
    if (event === "click") {
      var city = input.value;
      console.log(city);
      var api_key = "4263d00d84272897b98137373c8cb60d";
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          weather_info(data);
        })
        .catch((error) => alert("Invalid City Name!"));
    }
  });
function event() {
  console.log(call);
}
