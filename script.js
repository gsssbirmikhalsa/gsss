function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft = Math.max(
        slider.scrollLeft - slider.offsetWidth,
        0
    );
}

function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft = Math.min(
        slider.scrollLeft + slider.offsetWidth,
        slider.scrollWidth
    );
}
