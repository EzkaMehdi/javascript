//- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
//- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
//- Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`
function format(num){
    var wHour = num % 3600;
    var hour = (num - wHour) / 3600 ;

    var wMin = wHour % 60
    var min = (wHour - wMin) / 60;

    var sec = wMin
    var result = hour + ":" + min + ":" + sec;
    console.log(result);
}
format(7200)

// 1h=3600 secondes , 1min=60 secondes