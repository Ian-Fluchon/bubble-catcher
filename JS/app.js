
"use strict"

const counterDisplay = document.querySelector('h3');
let counter = 0;


const createBubble = () => {
    const bubble = document.createElement("span");
    const size = getRandomNbre(100, 300) + "px";
    const positionX = getRandomNbre(0, 100) + "%";
    const positionY = getRandomNbre(0, 100) + 50 + "%";

    bubble.classList.add('bubble')
    document.body.appendChild(bubble);

    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.top = positionY;
    bubble.style.left = positionX;
    bubble.style.setProperty('--x', getRandomNbre(-100, 100)+ "%");

    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove()
    })

    setTimeout(() => {
        bubble.remove();
    }, 8000);
};


setInterval(createBubble, 500);
