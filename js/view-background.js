const toggleViewBackground = (e) => {
  const bgButton = e.target;
  const mainStyles = document.getElementsByTagName("main")[0].style;
  let currentlyViewing = bgButton.classList.contains("current");
  if (currentlyViewing) {
	bgButton.classList.remove("current");
	bgButton.title = "Hide content to view background image";
	mainStyles.visibility = "visible";
    mainStyles.opacity = "0.8";
  } else {
	bgButton.classList.add("current");
	bgButton.title = "Reveal content over background image";
    mainStyles.opacity = "0";
	mainStyles.visibility = "hidden";
  }
};

let gameInterval;
let asteroids = [];
let asteroidDestroyers = [];
const soundEffect = new Audio("audio/distant-explosion-80398.mp3#t=5");
const asteroidContents = [
  "</>",
  "<div>",
  "<p>",
  "<body>",
  "<head>",
  "<footer>",
  "<header>",
  "<img>",
  "<a>",
  "<title>",
  "<ul>",
  "<li>",
  "<dd>",
  "<dt>",
  "<h1>",
  "<h2>",
  "<h3>",
  "<h4>",
  "<h5>",
  "<h6>",
];

const getTargetLocation = () => {
  let xCoord, yCoord, rotation;
  const determiner = Math.floor(Math.random() * 4);
  switch(determiner) {
    case 0:
      yCoord = -10;
      xCoord = -10 + Math.random() * 120;
      break;
    case 1:
      xCoord = 110;
      yCoord = -10 + Math.random() * 120;
      break;
    case 2:
      yCoord = 110;
      xCoord = -10 + Math.random() * 120;
      break;
    case 3:
      xCoord = -10;
      yCoord = -10 + Math.random() * 120;
      break;
    default: 
      break;
  }
  rotationSignCoeff = determiner > 2 ? 1 : -1;
  rotation = rotationSignCoeff * Math.random() * 360;
  return {xCoord, yCoord, rotation};
};

const createAsteroid = (xPos, yPos) => {
  const newAsteroid = document.createElement("div");
  const contentIndex = Math.floor(Math.random() * asteroidContents.length);
  newAsteroid.innerText = asteroidContents[contentIndex];
  newAsteroid.style.color = "black";
  newAsteroid.style.borderRadius = "3em";
  newAsteroid.style.backgroundColor = "darkgray";
  newAsteroid.style.display = "inline-block";
  newAsteroid.style.position = "fixed";
  newAsteroid.style.left = xPos;
  newAsteroid.style.top = yPos;
  newAsteroid.style.scale = 0;
  newAsteroid.style.transitionProperty = "top, left, rotate, scale, opacity";
  newAsteroid.style.transitionDuration = "4s, 4s, 4s, 4s, .5s";//((String(Math.random() * 5) + "s, ") * 4)+ ".5s";
  newAsteroid.style.transitionTimingFunction = "ease-in, ease-in, ease-in, ease-in, ease-out";
  const blast = (e) => {
    soundEffect.currentTime = 5;
    soundEffect.play();
    e.target.style.backgroundColor = "lightgreen";
    e.target.style.opacity = 0;
  };
  newAsteroid.onmousedown = blast;
  newAsteroid.ontouchstart = blast;
  document.body.appendChild(newAsteroid);
  asteroids.push(newAsteroid);
  setTimeout(() => {
    const targetLocation = getTargetLocation();
    newAsteroid.style.left = targetLocation.xCoord + "vw";
    newAsteroid.style.top = targetLocation.yCoord + "vh";
    newAsteroid.style.rotate = targetLocation.rotation + "deg";
    newAsteroid.style.scale = "4";
  }, 13);
  asteroidDestroyers.push(setTimeout(() => {
    asteroids.splice(asteroids.indexOf(newAsteroid), 1);
    document.body.removeChild(newAsteroid);
  }, 4000));
};

const toggleBackgroundGame = (e) => {
  if (e.target.classList.contains("current")) {
    document.body.style.overflow = "hidden";
    document.body.style.cursor = "crosshair";
    document.body.style.touchAction = "manipulation";
    gameInterval = setInterval(() => {
        createAsteroid("50vw", "50vh");
    }, 4000);
  }
  else {
    clearInterval(gameInterval);
    asteroidDestroyers.forEach((timeout) => {
      clearTimeout(timeout);
    });
    asteroids.forEach((currentAsteroid) => {
      document.body.removeChild(currentAsteroid);
    });
    asteroids = [];
    document.body.style.touchAction = "auto";
    document.body.style.cursor = "auto";
    document.body.style.overflow = "auto";
  }
}

document.getElementById("view-background-button").onclick = (e) => {
  toggleViewBackground(e);
  toggleBackgroundGame(e);
};
