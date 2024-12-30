(async function getinfomation() {
  let userInput = prompt("Please enter something:");
  let response = await fetch(
    "https://pixabay.com/api/?key=47657014-91e28bac5a526127a1834227a&q=" +
      userInput +
      "&image_type=photo&pretty=true"
  );
  let data = await response.json();
  let list = data.hits;
  list.forEach((element) => {
    setTimeout(() => {
      let container = document.getElementById("box");
      let image = document.createElement("img");
      image.setAttribute("src", `${element.largeImageURL}`);
      container.append(image);
    }, 2000);
  });
})();
