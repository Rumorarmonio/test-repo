let popup = document.querySelector(".popup"),
    logIn = document.querySelector(".log_in"),
    cross = document.querySelector(".close");

document.addEventListener('click', event => {
    if (event.target == logIn)
        popup.classList.toggle('visible');
    if (event.target == popup || event.target == cross)
        popup.classList.remove('visible');
});