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
