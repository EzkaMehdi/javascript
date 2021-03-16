//- Créez une fonction `checkPal` qui reçoit une string en paramètre
//- La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
//- Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal(str){
    if(str.split("").reverse().join("") === str){
        console.log("Palindrome");
    }
    else{
        console.log("Nope");
    }
}
checkPal("girafarig");