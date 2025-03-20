
let index = 0;
const members = document.querySelectorAll(".slide .team-member");
const slide = document.querySelector(".slide");

function updateSlide() {
    slide.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % members.length;
    updateSlide();
}

setInterval(nextSlide, 5000);

// Arrastar com o dedo
let startX = 0;
let isDragging = false;

slide.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slide.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    let moveX = e.touches[0].clientX - startX;

    if (moveX > 50) { // Arrastar para a direita
        index = index > 0 ? index - 1 : members.length - 1;
        updateSlide();
        isDragging = false;
    } else if (moveX < -50) { // Arrastar para a esquerda
        index = (index + 1) % members.length;
        updateSlide();
        isDragging = false;
    }
});

slide.addEventListener("touchend", () => {
    isDragging = false;
});

updateSlide();
