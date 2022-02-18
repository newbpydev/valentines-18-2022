const body = document.body;
const heart = document.getElementById("heart");
document.getElementById("btn").addEventListener("click", changeColor);

async function changeColor() {
  // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
  // 2. Use that color to update the background color of the body.
  const count = 2;
  const colors = [];

  //* Fetching data from the scrimba colors api
  try {
    const response = await fetch(
      `https://apis.scrimba.com/hexcolors/?count=${count}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data.colors.forEach((color) => {
          colors.push(color.value);
        });
      })
      .catch((err) => console.error(err));
  } catch (e) {
    console.log(e);
  }

  //* Change heart and bg colors
  body.style.backgroundColor = colors[0];
  heart.style.setProperty("--white", colors[1]);

  heartBeat();
}

const heartBeat = () => {
  let intervalId;
  intervalId = setInterval(() => {
    // console.log("heya", intervalId);
    heart.classList.add("heart-beat");

    setTimeout(() => {
      heart.classList.remove("heart-beat");
    }, 150);
    setTimeout(() => {
      heart.classList.add("heart-beat");
    }, 300);
    setTimeout(() => {
      heart.classList.remove("heart-beat");
    }, 450);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 6000);
};
