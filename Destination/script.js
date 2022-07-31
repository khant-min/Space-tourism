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

// finished header

const liTags = document.querySelectorAll(".jrUl li");

const imgTag = document.querySelector(".image");
const h1Tag = document.querySelector("h1");
const pTag = document.querySelector("p");
const distanceTag = document.querySelector(".distance");
const timeTag = document.querySelector(".time");

let mainData = [];
const url = "https://achrafedd.github.io/Space-Tourism/data.json";

fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.destinations.length; i++) {
      mainData.push(data.destinations[i]);
    }
    liTags.forEach(liTag => {
      liTag.addEventListener("click", e => {
        liTags.forEach(liTag => {
          liTag.classList.remove("active");
        });
        liTag.classList.add("active");

        switch (e.target.innerHTML) {
          case "Moon":
            imgTag.src = "../Images/destination-images/image-moon.png";
            h1Tag.innerHTML = mainData[0].name;
            pTag.innerHTML = mainData[0].description;
            distanceTag.innerHTML = mainData[0].distance;
            timeTag.innerHTML = mainData[0].travel;
            break;
          case "Mars":
            imgTag.src = "../Images/destination-images/image-mars.png";
            h1Tag.innerHTML = mainData[1].name;
            pTag.innerHTML = mainData[1].description;
            distanceTag.innerHTML = mainData[1].distance;
            timeTag.innerHTML = mainData[1].travel;
            break;
          case "Europa":
            imgTag.src = "../Images/destination-images/image-europa.png";
            h1Tag.innerHTML = mainData[2].name;
            pTag.innerHTML = mainData[2].description;
            distanceTag.innerHTML = mainData[2].distance;
            timeTag.innerHTML = mainData[2].travel;
            break;
          case "Titan":
            imgTag.src = "../Images/destination-images/image-titan.png";
            h1Tag.innerHTML = mainData[3].name;
            pTag.innerHTML = mainData[3].description;
            distanceTag.innerHTML = mainData[3].distance;
            timeTag.innerHTML = mainData[3].travel;
            break;
          default:
            break;
        }
      });
    });
  });
