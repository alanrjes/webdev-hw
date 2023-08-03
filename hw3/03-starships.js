let starships = {};

const fetchData = (url) => {
  // Retrieve the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      starships = data.results;
      console.log(starships);
    })
    .catch((error) => console.error(error));
};

fetchData("https://swapi.dev/api/starships/");

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.classList.add("starship-component");

  const shipname = document.createElement("div");
  shipname.textContent = spaceship.name;

  const creditcost = document.createElement("div");
  creditcost.textContent =
    spaceship.cost_in_credits.toLocaleString() + " credits";

  const top = document.createElement("div");
  top.classList.add("top-grid");
  top.append(shipname, creditcost);

  const manufacturer = document.createElement("div");
  manufacturer.textContent = "Manufactured by " + spaceship.manufacturer;
  manufacturer.classList.add("middle-grid");

  const maxspeed = document.createElement("div");
  maxspeed.textContent = "Max atmosphering speed";
  const speedstat = document.createElement("span");
  speedstat.textContent = spaceship.max_atmosphering_speed.toLocaleString();
  speedstat.style.fontWeight = "bold";
  maxspeed.prepend(speedstat, document.createElement("br"));
  maxspeed.classList.add("stat-col");

  maxspeed.style.borderRight = "2px solid var(--light-gray)";

  const cargocapacity = document.createElement("div");
  cargocapacity.textContent = "Cargo capacity";
  const cargostat = document.createElement("span");
  cargostat.textContent = spaceship.cargo_capacity.toLocaleString();
  cargostat.style.fontWeight = "bold";
  cargocapacity.prepend(cargostat, document.createElement("br"));
  cargocapacity.classList.add("stat-col");

  const bottom = document.createElement("div");
  bottom.classList.add("bottom-grid");
  bottom.append(maxspeed, cargocapacity);

  container.append(top, manufacturer, bottom);
  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = 0;

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
