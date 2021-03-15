//- Créer une fonction `sortLetters` qui reçoit une string en paramètre
//- La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
//- Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"

function sortLetters(str)
{

    var str = str.split("");
    str.sort();
    str = str.join("");
    console.log(str)
}
sortLetters("konexio")
