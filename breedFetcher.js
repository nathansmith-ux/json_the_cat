const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `http://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function(error, response, body) {
    
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Breed Not Found", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };