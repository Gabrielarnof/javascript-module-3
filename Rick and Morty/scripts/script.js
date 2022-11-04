const mainAreaEl = document.createElement("main");
const sidebarEl = document.createElement("aside");

// header
const createHeader = () => {
  const headerEl = document.createElement("header");
  const headerTitleEl = document.createElement("h1");
  headerTitleEl.innerText = "Rick and Morty API";
  headerEl.append(headerTitleEl);
  bodyEl.append(headerEl);
};

// Aside

cosnt  episodeListEl = document.createElement("ul");

// body
const bodyEl = document.querySelector("body");
bodyEl.append(sidebarEl, mainAreaEl);
createHeader();
