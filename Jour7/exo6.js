// - Créez une variable `cakes` contenant la valeur suivante :

// ```jsx
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
var epuisé = [
	
	{
		name: "brownie",
		flavor: "chocolate",
		status: "sold out !"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "sold out !"
	},
]

// ```

// - À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
// - Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console