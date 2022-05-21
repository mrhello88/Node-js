const SearchBtn = document.getElementById("somButon");
const inputField = document.getElementById("basic-addon2");
const outputData = document.getElementById("CitCou");
const outputDate = document.getElementById("date");
const tempResult = document.getElementById("temp-result");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const wind = document.getElementById("wind");
const weather = document.getElementById("weath");

outputData.className = "visible";
outputDate.className = "visible";
tempResult.className = "visible1";

SearchBtn.addEventListener("click", () => {
  const inputValue = inputField.value;
  if (inputValue === "") {
    outputData.className = "visible";
    outputDate.className = "visible";
    tempResult.className = "visible1";
    outputData.className = "weather-heading";
    outputData.innerText = "Please Write Name Of City Before Search!";
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ab5cb481ca97cad907dc0edf3374c148`;
      const getInfo = async (url) => {
        const Data = await fetch(url);
        const res = await Data.json();
        const response = [res];
        console.log(response);
        if (response[0].cod === "404") {
            outputData.className = "visible";
            outputDate.className = "visible";
            tempResult.className = "visible1";
          outputData.className = "weather-heading";
          outputData.innerText = `${response[0].message}`;
        } else {
          outputData.className = "weather-heading";
          outputData.innerText = response[0].name;
          tempResult.className = "output";
          maxTemp.innerText = `Max_Deg:${(response[0].main.temp_max - 273.15).toFixed(
            3
          )} C`;
          minTemp.innerText = `Min_Deg:${(response[0].main.temp_min - 273.15).toFixed(
            3
          )} C`;
          outputDate.className = "Date";
          weath.innerText = `weather:${response[0].weather[0].main}`;
          wind.innerText = `wind:${response[0].wind.speed}`;
        }
      };
      getInfo(url);
      //   const res = await JSON(Data)
    } catch (error) {
      outputData.className = "weather-heading";
      outputData.innerText = "Please Write Name Of City Before Search!";
    }
  }
});
