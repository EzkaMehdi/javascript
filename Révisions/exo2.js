//- Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
//- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
//- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false
​
function countEach(str) {
    var countX = 0;
    var countO = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        
        if (str.charAt(i) == "x" ){
            countX ++
        }
        else{
            countO ++
        }
​
    }
​
    if (countX === countO) {
        console.log("true")
    }
    else {
        console.log("false")
    }
​
}
​
countEach("xooxxoo");
​
// x x x o o o o x
// 0 1 2 3 4 5 6 7