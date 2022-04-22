// ==UserScript==
// @name        WhatsApp Compact
// @namespace   Violentmonkey Scripts
// @match       https://web.whatsapp.com/
// @grant       none
// @version     1.0
// @author      Schalk burger
// @description 3/10/2022, 9:46:44 PM
// ==/UserScript==

function toggleHideApp() {
  var element = document.getElementById("app");
  element.classList.toggle("hide-app");
}

function toggleCenterApp() {
  var element = document.getElementById("app");
  element.classList.toggle("center-app");
}

function toggleHideSidebar() {
  var element = document.getElementById("app");
  element.classList.toggle("hide-sidebar");
}

function setFavicon() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = "https://i.imgur.com/FbQEFY1.png";
  //   link.setAttribute("href", "https://i.imgur.com/FbQEFY1.png");
}

function hideFavicon() {
  var link = document.querySelector("link[rel~='icon']");
  link.classList.toggle("hide-favicon");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  //   link.href = "https://i.imgur.com/ZUOBx8F.png";
  link.setAttribute("href", "https://i.imgur.com/LHUHDjG.png");
}

function removeHideAppClass() {
  var element = document.getElementById("app");
  element.classList.remove("hide-app");
  var link = document.querySelector("link[rel~='icon']");
  link.setAttribute("href", "https://i.imgur.com/FbQEFY1.png");
}

document.onkeyup = function (e) {
  if (e.altKey && e.which == 72) {
    toggleHideApp();
    hideFavicon();
  } else if (e.altKey && e.which == 67) {
    toggleCenterApp();
  } else if (e.altKey && e.which == 83) {
    toggleHideSidebar();
  } else {
    setFavicon();
  }
};

window.addEventListener("click", function (event) {
  removeHideAppClass();
});

// window.addEventListener("keyup", function (event) {
//   removeHideAppClass();
// });

window.addEventListener("load", (event) => {
  console.log("WhatsApp Compact Loaded");
});
