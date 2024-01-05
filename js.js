"use strict";

//Funktion för hamburgermeny

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


//JS för returresa

//hämta element
let check1El = document.getElementById("retur_check");

//eventlyssnare
check1El.addEventListener("click", showDiv1);


//funktion som visar och gömmer val på återkommande resor
function showDiv1() {

    let div1El = document.getElementById("returresa");

    let styleEl = window.getComputedStyle(div1El);

    if(styleEl.display === "none") {

        div1El.style.display = "block";
    } else {
        div1El.style.display = "none";
    }
}

//JS för återkommande resor

//hämta element
let check2El = document.getElementById("aterkommande_check");

//eventlyssnare
check2El.addEventListener("click", showDiv2);


//funktion som visar och gömmer val på återkommande resor
function showDiv2() {

    let div2El = document.getElementById("intervall_aterkommande");

    let styleEl = window.getComputedStyle(div2El);

    if(styleEl.display === "none") {

        div2El.style.display = "block";
    } else {
        div2El.style.display = "none";
    }
}

