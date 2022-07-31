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

// End header

const nums = document.querySelectorAll(".li .list");

const h2 = document.querySelector(".h2");
const pTag = document.querySelector("p");
const imgTag = document.querySelector("#img");

const url = "https://achrafedd.github.io/Space-Tourism/data.json";

let mainData = [];
fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.technology.length; i++) {
      mainData.push(data.technology[i]);
      console.log(mainData);
    }
    console.log(mainData);
    nums.forEach(num => {
      num.addEventListener("click", e => {
        nums.forEach(num => {
          num.classList.remove("lastActive");
        });
        num.classList.add("lastActive");

        switch (e.target.innerHTML) {
          case "1":
            h2.innerHTML = mainData[0].name;
            pTag.innerHTML = mainData[0].description;
            imgTag.src =
              "../Images/technology-images/desktop-images/image-launch-vehicle-portrait.jpg";
            break;
          case "2":
            h2.innerHTML = mainData[1].name;
            pTag.innerHTML = mainData[1].description;
            imgTag.src =
              "../Images/technology-images/desktop-images/image-spaceport-portrait.jpg";
            break;
          case "3":
            h2.innerHTML = mainData[2].name;
            pTag.innerHTML = mainData[2].description;
            imgTag.src =
              "../Images/technology-images/desktop-images/image-space-capsule-portrait.jpg";
            break;
          default:
            break;
        }
      });
    });
  });
