var landmark = document.getElementsByTagName("h1")[0];
var autoScroller = document.querySelector(".auto-scroller");
var docElement = document.documentElement;

function intersectionAction(observedElements, intersectionObserver) {
  observedElements.forEach((element) => {
    if (element.isIntersecting) {
      autoScroller.classList.add("current");
    } else {
      autoScroller.classList.remove("current");
    }
  });
}

function scrollToStart() {
  docElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

autoScroller.addEventListener("click", scrollToStart);

let optionsObject = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

let buttonActivator = new IntersectionObserver(intersectionAction, optionsObject);

buttonActivator.observe(landmark);