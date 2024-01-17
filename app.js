let button = document.querySelector(".cursor");
let body = document.querySelector("body");

window.addEventListener("mousemove", e => {
    body.style.background = `rgb(${e.clientY-100}, ${e.clientX-100}, 200)`;
    button.style.top = e.clientY + "px";
    button.style.left = e.clientX + "px";
});
