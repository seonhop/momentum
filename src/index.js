const form = document.querySelector("form");

function onPlay(event) {
    event.preventDefault();
    console.log("hi");
}

form.addEventListener("submit", onPlay);
