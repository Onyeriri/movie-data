import movieData from "../movieStore.js";

// movieData["Mission Impossible Part 2"] = mission["Mission Impossible Part 2"];

const submitBtn = document.getElementById("submit-btn");

const displayMovies = ({ cast, plot, rating, runtime, year }, title) => {
  let ul = document.getElementById("under-list");

  let h1Title = document.createElement("h1");
  let pCast = document.createElement("p");
  let pPlot = document.createElement("p");
  let pRating = document.createElement("p");
  let pRuntime = document.createElement("p");
  let pYear = document.createElement("p");
  let li = document.createElement("li");
  let div = document.createElement("div");

  h1Title.innerHTML = title;
  pCast.innerHTML = "Cast:" + cast.map((value) => " " + value);
  pPlot.innerHTML = "Plot: " + plot;
  pRating.innerHTML = "Rating: " + rating;
  pRuntime.innerHTML = "Runtime: " + runtime;
  pYear.innerHTML = "Year: " + year;

  li.appendChild(h1Title);
  li.appendChild(pCast);
  li.appendChild(pPlot);
  li.appendChild(pRating);
  li.appendChild(pRuntime);
  li.appendChild(pYear);

  li.classList.add("movie-list-li");

  ul.appendChild(li);
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById("name").value;
  const cast = document.getElementById("cast").value;
  const plot = document.getElementById("plot").value;
  const rating = document.getElementById("rating").value;
  const runtime = document.getElementById("runtime").value;
  const year = document.getElementById("year").value;

  const singleMovie = {
    plot: plot,
    cast: cast.split(","),
    runtime: runtime,
    rating: rating,
    year: year,
  };

  const mission = {};

  mission[title] = singleMovie;

  movieData[title] = mission[title];

  const MovieArray = Object.values(movieData);
  const MovieNames = Object.keys(movieData);

  const section = document.getElementById("show-list");
  const ul = document.getElementById("under-list");

  MovieArray.map((value, key) => {
    ul.remove();
    section.appendChild(ul);
    displayMovies(value, MovieNames[key]);
  });
});

const MovieArray = Object.values(movieData);
const MovieNames = Object.keys(movieData);

MovieArray.map((value, key) => {
  displayMovies(value, MovieNames[key]);
});

const iClose = document.getElementById("close");
const addSection = document.getElementById("show-card");
const addBtn = document.getElementById("add-btn");

iClose.addEventListener("click", () => {
  addSection.classList.remove("show");
  addSection.classList.add("none");
});

addBtn.addEventListener("click", () => {
  addSection.classList.remove("none");
  addSection.classList.add("show");
});
