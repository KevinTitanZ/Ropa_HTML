document.addEventListener("DOMContentLoaded", () => {
const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".carousel-prev");
const next = document.querySelector(".carousel-next");

prev.addEventListener("click", () => {
track.scrollBy({ left: -220, behavior: "smooth" });
});

next.addEventListener("click", () => {
track.scrollBy({ left: 220, behavior: "smooth" });
});
});