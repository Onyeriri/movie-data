import movieData from "../movieStore.js";

const mission = {
  "Mission Impossible Part 2": {
    plot: "",
    cast: [],
    runtime: 2,
    rating: 5,
    year: 1991,
  },
};

movieData["Mission Impossible Part 2"] = mission["Mission Impossible Part 2"];

console.log(movieData);
