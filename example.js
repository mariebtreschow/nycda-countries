var fs = require('fs'),
    argument = process.argv[2];

fs.readFile('countries.json', function(error, data) {
  var array = JSON.parse(data.toString()),
      country;

  array.forEach(function(element) {
    if(element.name === argument) {
      country = element;
    }
  });

  if (error) {
    console.log(error);
  }
  if (country) {
    console.log(country);
  } else {
    console.log(argument + ', is an argument we did not find in our countries.json file');
  }
});
