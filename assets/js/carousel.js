let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-image");
    const dotsContainer = document.querySelector(".carousel-dots");

    if (slides.length === 0) return;

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");

    // Create dots
    dotsContainer.innerHTML = "";

    slides.forEach((slide, i) => {
        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");
        dot.textContent = "•";
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));

        if (i === slideIndex) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            slideIndex = i;
            showSlide(slideIndex);
        });

        dotsContainer.appendChild(dot);
    });
}

function changeSlide(direction) {
    slideIndex += direction;
    showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(() => {
    changeSlide(1);
}, 5000);