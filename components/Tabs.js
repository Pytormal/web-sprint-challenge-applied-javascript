// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const base = axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((resp) => {
    console.log(resp.base);

    return resp;
  });

const lambdaTopics = function (resp) {
  const tabs = document.querySelector(".tabs");
  const topicsbar = document.querySelector(".topics");
  const titleSpan = document.querySelector(".title");

  topics = document.createElement("div");
  topics.classList.add("tab");
  topics.textContent = `${resp}`;

    titleSpan.appendChild(topics)
  return tabs;
};

const titles = document.querySelectorAll(".title");
const body = document.querySelector("body");

body.appendChild(lambdaTopics(base));
console.log(titles);
console.log(body);
