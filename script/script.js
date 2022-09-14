import movieData from "../movieStore.js";

const mission = {
  "Mission Impossible Part 2": {
    plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium consectetur repudiandae reprehenderit minima deserunt accusantium quisquam harum reiciendis temporibus perspiciatis rem atque ullam voluptatibus tenetur quas ad, alias quo eum.",
    cast: ["Victor", "Titi"],
    runtime: 2,
    rating: 5,
    year: 1991,
  },
};

movieData["Mission Impossible Part 2"] = mission["Mission Impossible Part 2"];

const MovieArray = Object.values(movieData);
const MovieNames = Object.keys(movieData);
let plot, cast, runtime, rating, year, name;
MovieArray.map((value, key) => {
  name = MovieNames[key];
  plot = value.plot;
  cast = value.cast.map((value) => value + " ");
  runtime = value.runtime;
  rating = value.rating;
  year = value.year;

  console.log(
    "Title: " + name,
    "\n",
    "Plot: " + plot,
    "\n",
    "Cast: " + cast,
    "\n",
    "Runtime: " + runtime,
    "\n",
    "Rating: " + rating,
    "\n",
    "Year: " + year
  );
});

console.log(MovieArray);
