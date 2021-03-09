var limit = 50;
var score = 51;
var password = "azerty";

console.log(password.length);

if (score >= limit && password.length > 5){
    console.log("Everything is good");
}

else if(score >= limit || password.length > 5){ 
    console.log("Something is good");
}

else{
    console.log("Nothing is good");
}
