// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require("request");



request.get("https://restcountries.eu/rest/v1/all", function getCountries (err, res, body) {
    var result = JSON.parse(body);
    var arr = result.map(function (elem) {
        countriesNames.push(elem.name )


       
    });
    console.log(countriesNames.join("-"));
//     var result = JSON.parse(body);
//     console.log(" - ", result[0].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[1].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[2].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[3].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[4].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[5].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[6].name);
    

//     var result = JSON.parse(body);
//     console.log(" - ", result[7].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[8].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[9].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[10].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[11].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[12].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[13].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[14].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[15].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[16].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[17].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[18].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[19].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[20].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[21].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[22].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[23].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[24].name);

//     var result = JSON.parse(body);
//     console.log(" - ", result[25].name);




// })
