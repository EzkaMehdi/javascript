// 1) Commençons par créer quelques variables :

// - La grille sera représenté par la variable `grid` contenant un array en 2D : des arrays dans un array (pour représenter les lignes et les colonnes, comme dans une partie d'échecs). Vous pouvez en apprendre plus [sur la doc de MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Exemples). Chaque case sera représentée par une string " " (un espace) pour signifier qu'elle est vide.
var prompt = require("prompt");
prompt.start();
var rover = {

    direction: "N",
    x: 0,
    y: 0,
    travelLog:[]

}

var grid = [
    [rover, " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];



function turnLeft(rover) {
    if (rover.direction == "N") {
        rover.direction = "W";
    }
    else if (rover.direction == "W") {
        rover.direction = "S";
    }
    else if (rover.direction == "S") {
        rover.direction = "E";
    } else if (rover.direction == "E") {
        rover.direction = "N";
    }


    // console.log(rover.direction);
}

// turnLeft(rover);


function turnRight(rover) {
    if (rover.direction == "N") {
        rover.direction = "E";
    }
    else if (rover.direction == "E") {
        rover.direction = "S";
    }
    else if (rover.direction == "S") {
        rover.direction = "W";
    } else if (rover.direction == "W") {
        rover.direction = "N";
    }
    // console.log(rover.direction);

}

// turnRight();

function moveForward(rover) {

    if (rover.direction === "E") {
        rover.x = rover.x + 1;
    }
    if (rover.direction === "W") {
        rover.x = rover.x - 1;
    }
    if (rover.direction === "N") {
        rover.y = rover.y - 1;
    }
    if (rover.direction === "S") {
        rover.y = rover.y + 1;
    }
    if (rover.x && rover.y < 0){
        console.log("Vous etes sortis de la grille");
    }else {
         console.log(rover);
    }

    
}
function moveBackward(rover) {

    if (rover.direction === "E") {
        rover.x = rover.x - 1;
    }
    if (rover.direction === "W") {
        rover.x = rover.x + 1;
    }
    if (rover.direction === "N") {
        rover.y = rover.y + 1;
    }
    if (rover.direction === "S") {
        rover.y = rover.y - 1;
    }
    if (rover.x && rover.y < 0){
        console.log("Vous etes sortis de la grille");
    }else {
         console.log(rover);
    }
    
}

function pilotRover(str) {
    while (str == "F") {
        rover.travelLog.push("x =",rover.x,"y =",rover.y);
        return moveForward(rover)
    }
    while (str == "B") {
        rover.travelLog.push("x =",rover.x,"y =",rover.y);
        return moveBackward(rover)
    }
    while (str == "L") {
        rover.travelLog.push("x =",rover.x,"y =",rover.y);
        return turnLeft(rover)
    }
    while (str == "R") {
        rover.travelLog.push("x =",rover.x,"y =",rover.y);
        return turnRight(rover)
    }
}
pilotRover("R");
pilotRover("B");





