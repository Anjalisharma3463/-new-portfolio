document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector("body");
    let theme = document.getElementsByClassName("theme")[0]; // Access the first element with the class 'theme'

    let isToggled = false;

    theme.addEventListener('click', () => {
        isToggled = !isToggled;
        body.style.setProperty("--value", isToggled ? "url('/images/background.jpg')" : "black ");
        body.style.background = `var(--value)`;
    });
});
