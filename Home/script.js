const ndImg = document.querySelector(".ndImg");
const rdImg = document.querySelector(".rdImg");
const ulTag = document.querySelector(".ul");
const right = document.querySelector(".right");
const header = document.querySelector(".header");
const cover = document.querySelector("#cover");

ndImg.addEventListener("click", () => {
  ndImg.style.display = "none";
  rdImg.style.display = "block";

  right.classList.add("cover");
});

rdImg.addEventListener("click", () => {
  ndImg.style.display = "block";
  rdImg.style.display = "none";

  right.classList.remove("cover");
});
