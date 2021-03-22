// - Créez une variable `longNames` contenant la valeur suivante :
// - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
// - Affichez les valeurs de `shortNames` dans la console


var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(str) {
  return str.firstName +" " + str.lastName;
});

console.log(shortNames);
