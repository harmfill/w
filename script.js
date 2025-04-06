function typeText(element, text, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".click-to-enter-text");
    const textToType = "Click to Enter...";
    textElement.textContent = "";
    typeText(textElement, textToType, 150);
});

function enterSite() {
    const clickToEnter = document.querySelector('.click-to-enter');
    clickToEnter.classList.add('fadeOut');

    setTimeout(() => {
        clickToEnter.style.display = 'none';
        document.title = "welcome";
        let audio = document.getElementById('background-music');
        audio.play();
        audio.volume = 0.15;
        let content = document.getElementById('content');
        content.style.display = 'block';
        content.classList.add('fade');
        document.getElementById('background').style.opacity = '1';
    }, 1000);
}