"use strict"
/* Created by:Kathato Mthethwa
   File Name:signin.js
   Date:12/10/2022
*/

$(document).ready(function() {
    let $nosignin = $("#nosignin");
    
    // names of students stored in JSON form
    let namesJSON = '{ "roster": [{"username": "Blossom Lee"},{"username": "Carla Smith"},{"username": "Claire Teske"},{"username": "Eleanor Scott"},{"username": "Elizabeth (Kaylin)"},{"username": "Emily K. Kelps"},{"username": "Fiona Patel"},{"username": "Glennda Janessa McMillian"},{"username": "Kathato Mthethwa"},{"username": "Kris Colon"},{"username": "Kyria Green"},{"username": "Lin Minna"},{"username": "Linna Huangfu"},{"username": "Lorraine Bowman"},{"username": "N Mthethwa"},{"username": "Orrianna Stevens"},{"username": "Rebekah Cyncar"},{"username": "Sierra Williams"},{"username": "Stephanie Balfour"},{"username": "Tara Walters"},{"username": "Tyler Mullins"},{"username": "Vanessa Grimm"},{"username": "Vivian"},{"username": "Yvette Ramirez"}]}';

    // Parse virtual-dancers.json JSON file with students' names
    let namesJSONObj = JSON.parse(namesJSON);
    let userInputPattern = /^[A-Za-z ]{2,20}$/;

    function signinUser() {
        let userInput = localStorage.getItem("username");
        if (userInputPattern.test(userInput) === true){
                for (let i = 0; i < namesJSONObj.roster.length; i++) {
                if (userInput === namesJSONObj.roster[i]["username"]) {
                    $(".student-only").show();
                    signinBtn.textContent = "Hi, " + userInput;
                    $nosignin.empty();
                    break;
                } else if (i === (namesJSONObj.roster.length - 1) && userInput !== null) {
                    signinBtn.textContent = "Sign In";
                    $nosignin.show();
                    $nosignin.html("Looks like you haven't registered. See the contact page to register!");
                    let timedDelete = window.setTimeout(function(){$nosignin.hide();}, 6000);
                    break;
                }
            }
        }
    }

    // Event handler: Check local storage for username on load
    window.onload = signinUser;

    // Event handler for sign in button
    let signinBtn = document.getElementById("signinBtn");
    signinBtn.onclick = function(){
        let userInput = window.prompt("Sign in to see student-only content! Enter your first and last name as it appears in Remind.")
        localStorage.setItem("username", userInput);
        signinUser();
        }
});