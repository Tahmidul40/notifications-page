const markReadBtn = document.getElementById("mark-read-btn");
const leftToRead = document.getElementById("left-to-read");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const redDotOne = document.getElementById("dot-one");
const redDotTwo = document.getElementById("dot-two");
const redDotThree = document.getElementById("dot-three");

markReadBtn.addEventListener("click", function () {
  first.classList.remove("active");
  second.classList.remove("active");
  third.classList.remove("active");
  redDotOne.remove();
  redDotTwo.remove();
  redDotThree.remove();
  leftToRead.textContent = 0;
});
