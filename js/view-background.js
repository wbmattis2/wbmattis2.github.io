// JavaScript Document
const bgButton = document.getElementById("view-background-button");
const mainStyles = document.getElementsByTagName("main")[0].style;
bgButton.onclick = () => {
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
