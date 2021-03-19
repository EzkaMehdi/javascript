// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
//   - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"

var prompt = require("prompt");


var profil = [
    {
        name:"email",
        validator: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        warning:"mettre le bon format d'email"
    },
    {

      name: "username",
      validator: /^[a-zA-Z\s\-]+$/,
      warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    {
      name: "password",
      validator: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/,
      hidden: true,
      warning: "Votre mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets",
      replace: "*"
    }
  
  ];
  prompt.start();
  



prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get(profil, function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}
   
  console.log("=> Password : " + res.password);
  console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
  console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
  console.log("it's all good");
});