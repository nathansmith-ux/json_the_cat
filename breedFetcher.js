const request = require('request');

const userInput = process.argv.slice(2);
const breedType = userInput[0].toLowerCase();

request(`http://api.thecatapi.com/v1/breeds/search?q=${breedType}`, function(error, response, body) {
  if (error) {
    console.log("Oh No! The request failed: ", error && response.statusCode);
    return;
  }
  
  const data = JSON.parse(body);

  // Checks if data is returned from the request
  if (data.length === 0) {
    console.log(`The request went through: Response Code ${response.statusCode}. YAY! \nHowever, there is no data as you entered an incorrect breedtype: ${breedType}`);
    return;
  }
  
  console.log(data[0].description);
  return data[0].description;
});