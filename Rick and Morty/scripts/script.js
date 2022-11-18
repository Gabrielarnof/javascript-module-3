const mainAreaEl = document.createElement("main");

// header
const createHeader = () => {
  const headerEl = document.createElement("header");
  const headerTitleEl = document.createElement("h1");
  headerTitleEl.innerText = "Rick and Morty API";
  headerEl.append(headerTitleEl);
  bodyEl.append(headerEl);
};

// Aside
const episodeListEl = document.createElement("ul");

const createAside = () => {
  const sidebarEl = document.createElement("aside");
  sidebarEl.append(episodeListEl);
  bodyEl.append(sidebarEl);
};

const createEpisode = (text) => {
  const episodeEl = document.createElement("li");
  episodeEl.innerText = text;
  episodeListEl.appendChild(episodeEl);
};

// body
const bodyEl = document.querySelector("body");
bodyEl.append(mainAreaEl);
createHeader();
createAside();
createEpisode("ananda");
