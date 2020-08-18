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

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((resp) => {
    Object.values(resp.data.topics).foreach((item) => {
      item.forEach((articles) => {
        body.appendChild(lambdaTopics(articles));
      });
    });
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

const lambdaTopics = () => {
  const topicsbar = document.querySelector(".topics");

  topics = document.createElement("div");
  topics.classList.add("tab");
  topics.textContent = "tell";

  topicsbar.appendChild(topics);
};

const body = document.querySelector("body");
body.appendChild(lambdaTopics("topics"));
