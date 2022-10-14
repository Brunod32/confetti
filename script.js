let boombtn = document.getElementById("boomBtn");
let stopbtn = document.getElementById("stopBtn");
let animatedElement = document.getElementById("confettiContainer");

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

boombtn.addEventListener("click", function boom() {
    animatedElement.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = getRandomArbitrary(0,100)+'%';
        confetti.style.animationDelay = 50 * i + "ms";
        confetti.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        animatedElement.appendChild(confetti);
    }
})

stopbtn.addEventListener("click", function stop() {
    animatedElement.innerHTML = "";
    lapin.style.opacity = 0;
})
