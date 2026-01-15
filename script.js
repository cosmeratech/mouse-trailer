const trailer = document.getElementById('trailer');

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    // trailer.style.transform = `translate(${x}px, ${y}px)`;
    // trailer.style.left = x + 'px';
    // trailer.style.top = y + 'px';

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800, // when animation completes, the trailer will revert back to the state it was in prior to the animation beginning 
        fill: "forwards" // this ensures that the animation stays in its final state, to retain the state reached at the end
    });
}

const getTrailerClass = type => {
    switch (type) {
        case "image":
            return "fa-solid fa-image"; // can do for video, pdf etc.
        default:
            return "fa-solid fa-arrow-up-right";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable");
    const interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);

    trailer.dataset.type = interactable ? interactable.dataset.type : "";

    if (interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}