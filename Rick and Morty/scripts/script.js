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

let episodesListArray;

fetch("https://rickandmortyapi.com/api/episode")
  .then((response) => response.json())
  .then((data) =>
    data.results.map((element) => createEpisode(`Episode ${element.id} `))
  );

const createEpisode = (text) => {
  const episodeEl = document.createElement("li");
  episodeEl.innerText = text;
  episodeListEl.appendChild(episodeEl);
};

// const createEpisodes
// body
const bodyEl = document.querySelector("body");
bodyEl.append(mainAreaEl);
createHeader();
createAside();
createEpisode("ananda");
