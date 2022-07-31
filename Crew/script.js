const roleTag = document.querySelector(".role");
const nameTag = document.querySelector(".name");
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

const pTag = document.querySelector(".pTag");
const img = document.querySelector("#img");
const buttonTags = document.querySelectorAll("button");

const url = "https://achrafedd.github.io/Space-Tourism/data.json";

let mainData = [];
fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.crew.length; i++) {
      mainData.push(data.crew[i]);
    }

    buttonTags.forEach(btn => {
      btn.addEventListener("click", e => {
        // between here and
        buttonTags.forEach(btn => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
        // here is so awesome!  Useful logic

        switch (e.target.id) {
          case "0":
            roleTag.innerHTML = mainData[0].role.toUpperCase();
            nameTag.innerHTML = mainData[0].name.toUpperCase();
            pTag.innerHTML = mainData[0].bio;
            img.src = "../Images/crew-images/image-douglas-hurley.png";
            break;
          case "1":
            roleTag.innerHTML = mainData[1].role.toUpperCase();
            nameTag.innerHTML = mainData[1].name.toUpperCase();
            pTag.innerHTML = mainData[1].bio;
            img.src = "../Images/crew-images/image-mark-shuttleworth.png";
            break;
          case "2":
            roleTag.innerHTML = mainData[2].role.toUpperCase();
            nameTag.innerHTML = mainData[2].name.toUpperCase();
            pTag.innerHTML = mainData[2].bio;
            img.src = "../Images/crew-images/image-victor-glover.png";
            break;
          case "3":
            roleTag.innerHTML = mainData[3].role.toUpperCase();
            nameTag.innerHTML = mainData[3].name.toUpperCase();
            pTag.innerHTML = mainData[3].bio;
            img.src = "../Images/crew-images/image-anousheh-ansari.png";
            break;
          default:
            break;
        }
      });
    });
  });

/*  Awesome logics

      we don't need to care about which element is last to class for select btn and
      delete the last element
      first we clear class-'active' with loop all the actives
      then class new select element and delete last element
*/
