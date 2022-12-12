"use strict"
/*
  Created by: Kathato Mthethwa
  File Name: contact-validation.js
  Date: 12/11/2022
*/

$(document).ready(function() {
    let $nameVal = $("#name");
    let $errName = $("#err-name");
    let $phoneVal = $("#phone");
    let $errPhone = $("#err-phone");
    let $textareaVal = $("#questions")
    let $errTextArea = $("#err-textarea")
    let $form = $("#form");

    $nameVal.focus(function() {
        $errName.empty().append("Letters and spaces only.");
    }).blur(function() {
        $errName.empty();
    })

    $phoneVal.focus(function() {
        $errPhone.empty().append("Digits 0-9 only.");
    }).blur(function() {
        $errPhone.empty();
    })

    $textareaVal.focus(function() {
        $errTextArea.empty().append("Maxiumum 150 characters.");
    }).blur(function() {
        $errTextArea.empty();
    })

    $form.submit(function(event) {
        let fieldColor = "#fff";
        let errorBkgdColor = "#fdd";
        let errorNum = 0;
        let namePattern = /^[A-Za-z ]{2,20}$/;
        let phonenumPattern = /^\d+$/;

        $(".fields").css("background-color", fieldColor);
        $(".err-msg").empty();
        
        if ($nameVal.val().length >= 0) {
            if (!(namePattern.test($nameVal.val()))) {
                $errName.append("Required: Must contain only letters and spaces - between 2 and 20 characters.");
                $nameVal.css("background-color", errorBkgdColor);
                errorNum ++;
            }
        }

        if (!phonenumPattern.test($phoneVal.val())) {
            $errPhone.append("Required: Maximum 15 digits.")
            $phoneVal.css("background-color", errorBkgdColor);
            errorNum ++;
        }

        if (errorNum > 0) {
            $form.append("<div class='err-msg'>Please correct errors before submitting.</div>");
            event.preventDefault();
        }
    });
});