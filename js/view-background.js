const toggleViewBackground = (e) => {
  const bgButton = e.target;
  const lmButton = document.getElementById("light-mode-button");
  const mainStyles = document.getElementsByTagName("main")[0].style;
  let currentlyViewing = bgButton.classList.contains("current");
  if (currentlyViewing) {
  if (document.getElementById("light-mode-button").classList.contains("current")) {
    document.body.style.backgroundImage = 'none';
  }
	bgButton.classList.remove("current");
	bgButton.title = "Hide content to view background image";
	mainStyles.visibility = "visible";
    mainStyles.opacity = "0.8";
  } else {
    document.body.style.backgroundImage = 'url("images/galaxy-background.png")';
	bgButton.classList.add("current");
	bgButton.title = "Reveal content over background image";
    mainStyles.opacity = "0";
	mainStyles.visibility = "hidden";
  }
};

document.getElementById("view-background-button").onclick = toggleViewBackground;
