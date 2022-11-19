const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", ev => {
  searchInputElement.focus();
});

searchInputElement.addEventListener("focus", ev => {
  searchElement.classList.add("focused");
  searchInputElement.setAttribute("placeholder", "통합검색");
});

searchInputElement.addEventListener("blur", ev => {
  searchElement.classList.remove("focused");
  searchInputElement.value = ""
  searchInputElement.setAttribute("placeholder", "");
});

const badges = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(ev => {
  if (scrollY > 500) {
    //  Badge 보이기
    // badges.style.display = "none";
    // gsap.to("Element", "Duration", "Options")
    gsap.to(badges, .6, {
      opacity: 0,
      display: "none"
    });
  } else {
    // Badge 숨기기
    // badges.style.display = "block";
    gsap.to(badges, .6, {
      opacity: 1,
      display: "block"
    });
  }
}, 500))
