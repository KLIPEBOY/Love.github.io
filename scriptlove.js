document.addEventListener("DOMContentLoaded", function () {
    createHearts();
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Разная продолжительность анимации для разнообразия
        document.body.appendChild(heart);

        animateHeart(heart);
    }, 1000); // Создание нового сердечка каждую секунду
}

function animateHeart(heart) {
    const animation = anime({
        targets: heart,
        translateX: anime.random(-10, 10) + "vw",
        translateY: anime.random(-10, -20) + "vh",
        scale: [0.1, 1],
        opacity: [0.5, 1],
        easing: "linear",
        duration: 3000,
        complete: function () {
            heart.remove();
        },
    });
}
