// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const heading = document.querySelector(".header");

  const header = document.createElement("div");
  header.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = `MARCH 28, 2020`;

  const h1Header = document.createElement("h1");
  h1Header.textContent = "Lambda Times";

  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = "90°";

  topHeader.appendChild(header);
  header.appendChild(date);
  header.appendChild(h1Header);
  header.appendChild(temperature);

  return heading;
}

const topHeader = document.querySelector(".header-container");
const body = document.querySelector("body");
console.log(topHeader);

body.appendChild(Header("header-container"));
console.log(body);
