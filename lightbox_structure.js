"use strict";
/* Created by: Kathato Mthethwa
   File Name: lightbox_structure.js
   Date: 11/11/2022
*/

window.addEventListener("load", function () {
    let lightbox = document.getElementById("lightbox");

    // Lightbox parts
    let lbTitle = document.createElement("h1");
    let lbPrevBtn = document.createElement("div");
    let lbNextBtn = document.createElement("div");
    let lbImages = document.createElement("div");

    // Create lightbox title
    lightbox.appendChild(lbTitle)
    lbTitle.id = "lbTitle";
    lbTitle.textContent = lightboxTitle;

    // Add previous and next button
    lightbox.appendChild(lbPrevBtn);
    lbPrevBtn.id = "lbPrevBtn";
    lbPrevBtn.innerHTML = "&#128378;";
    lbPrevBtn.onclick = showPrev;

    // Add previous and next button
    lightbox.appendChild(lbNextBtn);
    lbNextBtn.id = "lbNextBtn";
    lbNextBtn.innerHTML = "&#128131;";
    lbNextBtn.onclick = showNext;

    // Add images to lightbox from lightboxImages array in lightbox_data.js
    lightbox.appendChild(lbImages);
    lbImages.id = "lbImages";
    for (let i = 0; i < lightboxImages.length; i++) {
        let image = document.createElement("img");
        image.src = "images/" + lightboxImages[i] + ".jpg";
        image.alt = lightboxImages[i];
        image.onclick = createOverlay;
        lbImages.appendChild(image);
    }

    // Function to show previous image in lightbox
    function showPrev() {
        lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
        }

    // Function to show next image in lightbox
    function showNext() {
        lbImages.appendChild(lbImages.firstElementChild);
    }

    function createOverlay() {
        let overlay = document.createElement("div");
        overlay.id = "overlay";

        // Create figure element
        let figure = document.createElement("figure");
        overlay.appendChild(figure);

        // Add overlay image to figure
        let overlayImage = this.cloneNode("true");
        figure.appendChild(overlayImage);

        // Add overlay caption to figure
        let overlayCaption = document.createElement("figcaption");
        overlayCaption.textContent = this.alt;
        figure.appendChild(overlayCaption);

        // Add close button to overlay
        let closeBtn = document.createElement("div");
        closeBtn.id = "overlayCloseBtn";
        closeBtn.innerHTML = "&times";

        // Event handler for close button
        closeBtn.onclick = function() {
            document.body.removeChild(overlay);
        }
        overlay.appendChild(closeBtn);

        // Add overlay to document
        document.body.appendChild(overlay);
    }
});