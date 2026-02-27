let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block"; // يظهر
  } else {
    topBtn.style.display = "none"; // يختفي
  }
});

// لما اضغط عليه يرجع لفوق
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});