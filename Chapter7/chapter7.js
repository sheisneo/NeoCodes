"use strict"

// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("body").style.border = "5px black solid";
// document.getElementById("mouth").style.borderRadius = "10px";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
// document.getElementById("body").style.color = "#ff55";
// document.getElementById("nose").style.borderRadius = "50px"
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";

let righteye = document.getElementById("righteye");
righteye.addEventListener("click", moveUpDown);

let lefteye = document.getElementById("lefteye");
lefteye.addEventListener("click", moveUpDown);

let leftarm = document.getElementById("leftarm");
leftarm.addEventListener("click", moveRightLeft);

let mouth= document.getElementById("mouth");
mouth.addEventListener("click", moveLeftRight2);

let rightarm = document.getElementById("rightarm");
rightarm.addEventListener("click", moveUpDown2);

let body = document.getElementById("body");
body.addEventListener("click", moveDownUp);


function moveUpDown(e) {
    let roboPart = e.target;
    let top = 0;
    let animation = setInterval (frame,100);

    function frame() {
        roboPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation);
        }
    }

}

function moveRightLeft(e) {
    let roboPart = e.target;
    let left = 0;

    let animation = setInterval(frame,10);

    function frame () {
        roboPart.style.left = left + "%";
        left++;
        if (left === 70) {
            clearInterval(animation);
        }
    }
}



function moveLeftRight2(e) {
    let roboPart = e.target;
    let top= 0;
    let animation = setInterval (frame,100);

    function frame() {
        roboPart.style.top = top + "%";
        top++;
        if (top === 70) {
            clearInterval(animation);
        }
    }

}


function moveUpDown2(e) {
    let roboPart = e.target;
    let right = 0;
    let animation = setInterval (frame,10);

    function frame() {
        roboPart.style.top = right + "%";
        right++;
        if (right === 36) {
            clearInterval(animation);
        }
    }

}

function moveDownUp(e) {
    let roboPart = e.target;
    let top = 0;
    let animation = setInterval (frame,10);

    function frame() {
        roboPart.style.top = top + "%";
        top++;
        if (top === 36) {
            clearInterval(animation);
        }
    }

}
