const toggleLightMode = (e) => {
    const solidBgElements = document.querySelectorAll("h1, h2, h3, main a, .solid-bg");
    const navLinkElements = document.querySelectorAll("header a");
    let currentlyLight = e.target.classList.contains("current");
    if (currentlyLight) {
      e.target.classList.remove("current");
      e.target.title = "Touch or click to view dark text on light background";
      document.body.style.backgroundImage = 'url("images/galaxy-background.png")';
      solidBgElements.forEach(element => {
          element.style.color = "white";
          element.style.background = "black";
      });
      navLinkElements.forEach(element => {
        element.href = element.href.replace("?light=true", "");
      });
    } else {
      e.target.classList.add("current");
      e.target.title = "Touch or click to return to dark mode";
      document.body.style.backgroundImage = 'url("images/galaxy-background-light.png")';
      solidBgElements.forEach(element => {
          element.style.color = "black";
          element.style.backgroundColor = "silver";
      });
      navLinkElements.forEach(element => {
        element.href += "?light=true";
      });
    }
  };
  
document.querySelectorAll("h1, h2, h3, main a, .solid-bg").forEach(element => {
  element.style.transitionProperty = "color, backgroundColor";
  element.style.transitionDuration = ".5s";
});

document.getElementById("light-mode-button").onclick = toggleLightMode;

if (window.location.search.includes('light=true')) {
    document.getElementById("light-mode-button").click();
}

