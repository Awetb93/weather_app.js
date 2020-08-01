const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYXdldGJyaGFuZSIsImEiOiJja2N2ZXNlMDkwMDFjMnFvNHdibnVtbXd6In0.D9Mfv25ZPfL9DnwjjZckVw&limit=1`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unabel to connect to location!", undefined);
    } else if (body.features.length == 0) {
      callback("unable to find location.Try another location", undefined);
    } else {
      callback(undefined, {
        long: body.features[0].center[0],
        lat: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
