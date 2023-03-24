// JavaScript Document
const bgButton = document.getElementById("view-background-button");
const mainStyles = document.getElementsByTagName("main")[0].style;
bgButton.onclick = () => {
  let currentlyViewing = bgButton.classList.contains("current");
  if (currentlyViewing) {
	bgButton.classList.remove("current");
	mainStyles.visibility = "visible";
    mainStyles.opacity = "0.8";
  } else {
	bgButton.classList.add("current");
    mainStyles.opacity = "0";
	mainStyles.visibility = "hidden";
  }
};
