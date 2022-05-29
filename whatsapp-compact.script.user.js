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

function toggleFullWidthApp() {
  var element = document.getElementById("app");
  element.classList.toggle("full-width-app");
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
}

function hideFavicon() {
  var link = document.querySelector("link[rel~='icon']");
  link.classList.toggle("hide-favicon");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.setAttribute("href", "https://i.imgur.com/LHUHDjG.png");
}

function removeHideAppClass() {
  var element = document.getElementById("app");
  element.classList.remove("hide-app");
  var link = document.querySelector("link[rel~='icon']");
  link.setAttribute("href", "https://i.imgur.com/FbQEFY1.png");
  var hiddenFaviconLink = document.querySelector("link[class*='blank']");
  hiddenFaviconLink.remove();
}

document.onkeyup = function (e) {
  if (e.altKey && e.which == 72) {
    toggleHideApp();
  } else if (e.altKey && e.which == 87) {
    toggleFullWidthApp();
  } else if (e.altKey && e.which == 67) {
    toggleHideSidebar();
  } else {
    setFavicon();
  }
};

setInterval(function () {
  setFavicon();
}, 2000);

window.addEventListener("click", function () {
  removeHideAppClass();
});

window.addEventListener("load", () => {
  console.log("WhatsApp Compact Loaded");
  var link = document.querySelector("link[rel~='icon']");
  link.setAttribute("href", "https://i.imgur.com/FbQEFY1.png");
});
