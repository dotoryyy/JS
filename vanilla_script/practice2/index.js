const title = document.querySelector("#title");
title.innerHTML = "inner HTML";
title.style.color = 'green';
document.title = '자바스크립트 연습';

title.textContent = 'Hi 🐸'

function handleResize(event) {
    console.log(event);
}

const BASE_COLOR = 'red'
const OTHER_COLOR = 'blue'


function handleClick() {
    const currentCol = title.style.color;
    if (currentCol === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
};

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
} //mouseenter
init();

//always use MDN

