// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
// - Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
// - Affichez la table d'addition

function addition(number) {
    var firstInput = parseFloat(number)
    
    if (Number.isInteger(firstInput) == false) {
        console.log("error");
    } else {
        for (var i = 1; i <= 10; i++) {
            console.log(firstInput, "+", i, "=", firstInput + i)
        }
    }
}
addition(process.argv[3]);

var multiplication = require("./table");

console.log(multiplication);
