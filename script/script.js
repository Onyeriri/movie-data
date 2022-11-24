import movieData from "../movieStore.js";

// creation and initialization of variables
const submitBtn = document.getElementById("submit-btn");
const iClose = document.getElementById("close");
const addSection = document.getElementById("show-card");
const movieForm = document.getElementById("movie-form");
const searchBtn = document.getElementById("search-btn");
const cancelBtn = document.getElementById("cancel-btn-id");
const search = document.getElementById("search-section");
const addBtn = document.getElementById("add-btn");
const ul = document.getElementById("under-list");
const searchElement = document.getElementById("search-value");
const newObject = Object.entries(movieData);

// function that handles displaying of movies on the webpage
const displayMovies = (
  { cast, plot, rating, runtime, year },
  title,
  span = ""
) => {
  let ul = document.getElementById("under-list");
  let section = document.getElementById("show-list");

  let h1Title = document.createElement("h1");
  let pCast = document.createElement("p");
  let pPlot = document.createElement("p");
  let pRating = document.createElement("p");
  let pRuntime = document.createElement("p");
  let pYear = document.createElement("p");
  let li = document.createElement("li");

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

  if (section.contains(ul)) {
    ul.appendChild(li);
  } else {
    if (
      title !== "" &&
      plot !== "" &&
      cast !== "" &&
      runtime !== "" &&
      rating !== "" &&
      year !== ""
    ) {
      span.appendChild(li);
      section.appendChild(span);
    }
  }
};

// function that handles user inputs on their favorite movies
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const ul = document.createElement("ul");
  ul.setAttribute("id", "delete-ul");

  const title = document.getElementById("name").value.trim();
  const cast = document.getElementById("cast").value.trim();
  const plot = document.getElementById("plot").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const runtime = document.getElementById("runtime").value.trim();
  const year = document.getElementById("year").value.trim();
  const deleteUL = document.getElementsByClassName("delete");
  const deleteClass = document.querySelector(".delete");

  if (
    title === "" &&
    cast === "" &&
    plot === "" &&
    rating === "" &&
    runtime === "" &&
    year === ""
  ) {
    return;
  }

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

  // const MovieArray = Object.values(movieData);
  // const MovieNames = Object.keys(movieData);

  const convertedObj = Object.entries(movieData);
  const deleteExistingUL = Array.prototype.slice.call(deleteUL);

  const oldUl = document.getElementById("under-list");
  const section = document.getElementById("show-list");

  if (section.contains(oldUl)) {
    oldUl.remove();
  } else {
    const section = document.getElementById("delete-ul");
    section.remove();
  }

  console.log(deleteClass, deleteUL);

  if (section.contains(deleteClass)) {
    deleteExistingUL.map((arr) => arr.remove());
  }

  convertedObj.map((value) => {
    displayMovies(value[1], value[0], ul);
  });

  movieForm.reset();
});

// new iteration
newObject.map((value) => {
  displayMovies(value[1], value[0]);
});

// function that handles closing of movie form
iClose.addEventListener("click", () => {
  addSection.classList.remove("show");
  addSection.classList.add("none");
  ul.classList.remove("none");
});

// function that handles closing of search form
cancelBtn.addEventListener("click", () => {
  search.classList.remove("show");
  search.classList.add("none");
  // ul.classList.remove("none");
});

// function that handles opening movie form
addBtn.addEventListener("click", () => {
  addSection.classList.remove("none");
  addSection.classList.add("show");
  search.classList.remove("show");
  search.classList.add("none");

  ul.classList.add("none");
});

// new search
searchElement.addEventListener("keyup", (e) => {
  const userInput = searchElement.value;
  const arrObject = Object.entries(movieData);
  const oldUl = document.getElementById("under-list");
  const newUl = document.getElementById("delete-ul");
  let ul = document.createElement("ul");
  const section = document.getElementById("show-list");
  const li = document.getElementsByClassName("movie-list-li");
  const arrLi = Array.prototype.slice.call(li);

  ul.classList.add("delete");

  const filteredResults = arrObject.filter(
    (obj) => obj[0].toLowerCase().indexOf(userInput.toLowerCase().trim()) !== -1
  );

  if (section.contains(oldUl)) {
    arrLi.map((arr) => arr.remove());
  }

  if (section.contains(newUl)) {
    arrLi.map((arr) => arr.remove());
  }

  if (section.contains(ul)) {
    arrLi.map((arr) => arr.remove());
  }

  filteredResults.map((result) => {
    displayMovies(result[1], result[0], ul);
  });
});
