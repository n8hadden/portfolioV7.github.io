function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const containerTop = reveal.getBoundingClientRect().top;
    const containerVisible = 150;
    if (containerTop < windowHeight - containerVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  })
}

window.addEventListener("scroll", reveal);