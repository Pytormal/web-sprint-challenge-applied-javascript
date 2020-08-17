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
    console.log(resp.data);

    return resp;
  });

// const lambdaTopics = function (data) {

//     tabs = document.createElement('div')
//     tabs.classList.add('tab')
//     tabs.textContent = `${data.topics}`

// return tabs
// }

// const titles = document.querySelectorAll(".title");
// const body = document.querySelector("body");
// console.log(titles);
// console.log(body);

// body.appendChild(lambdaTopics(base));

const lambdaTopics = function (data) {
  const tabs = document.querySelector(".tabs");
  const topicsbar = document.querySelector(".topics");

  topics = document.createElement("div");
  topics.classList.add("tab");
  topics.textContent = `${data.topics}`;

  topicsbar.appendChild(topics);
  return tabs;
};

// topics.forEach((item) => {
//   body.appendChild(lambdaTopics("topics"));
// });

const titles = document.querySelectorAll(".title");
const body = document.querySelector("body");

body.appendChild(lambdaTopics("topics"));
console.log(titles);
console.log(body);
