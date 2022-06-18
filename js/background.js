const images = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
    "07.jpeg",
    "08.jpeg",
    "09.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgContainer = document.querySelector(".bg-img-container");
bgImage.src = `img/${chosenImage}`;

bgContainer.appendChild(bgImage);
