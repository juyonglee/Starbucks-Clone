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

window.addEventListener("scroll", _.throttle(ev => {
  console.log(`X: ${window.scrollX}, Y: ${window.scrollY}`)
  const badges = document.querySelector("header .badges");
  if (scrollY > 500) {
    //  Badge 보이기
    badges.style.display = "none";
  } else {
    // Badge 숨기기
    badges.style.display = "block";
  }
}, 500))
