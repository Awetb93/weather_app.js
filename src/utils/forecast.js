const request = require("request");
const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=bdc8e56c3da23a14155a5c20563209ec&query=${lat},${long}`;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      const {
        temperature,
        feelslike,
        weather_descriptions,
        humidity,
      } = body.current;
      callback(
        undefined,
        `the weather is ${temperature}C ,it feelslike ${feelslike}.The humidity is ${humidity}% .It is ${weather_descriptions[0]}
       `
      );
    }
  });
};
module.exports = forecast;
