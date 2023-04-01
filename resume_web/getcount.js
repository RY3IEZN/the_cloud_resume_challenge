/** @format */

window.addEventListener("DOMContentLoaded", (event) => {
  getVisitorCount();
});

const functionApi = "";

const getVisitorCount = () => {
  let count = 125;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("the website is calling the function");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
