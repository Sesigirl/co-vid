"use strict"
/*
  Created by: Kathato Mthethwa
  File Name: gallery.js
  Date: 10/23/2022
*/

// Captions for Workout Challenges
let galleryTitles = ["Move-How-You-Want", "21-Day Challenge", "14-Day Challenge"];
let gallery = document.getElementById("gallery");

// On load, create figure elements and add images and event handlers
window.addEventListener("load", function() {
  let galleryImages = document.createElement("figure");

  for (let i = 0; i < galleryTitles.length; i++) {
    let image = document.createElement("img");
    image.src = "images/" + galleryTitles[i] + ".jpg";
    image.alt = galleryTitles[i];
    image.onclick = function() {
      let overlay = document.createElement("div");
      overlay.id = "overlay";
    
      // Create figure element
      let figure = document.createElement("figure");
      overlay.appendChild(figure);
    
      // Add overlay image to figure
      let overlayImage = document.createElement("img");
      overlayImage.src = "images/" + galleryTitles[i] + "(original).jpg";
      overlayImage.alt = galleryTitles[i];
      figure.appendChild(overlayImage);
      overlayImage
    
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

    galleryImages.appendChild(image);
  }
  gallery.appendChild(galleryImages);

});