const headerEl = document.createElement("header");
const mainAreaEl = document.createElement("main");
const sidebarEl = document.createElement("aside");

// header
const headerTitleEl = document.createElement("h1");
headerTitleEl.innerText = "Rick and Morty API";
headerEl.append(headerTitleEl);

const bodyEl = document.querySelector("body");
bodyEl.append(headerEl, sidebarEl, mainAreaEl);
