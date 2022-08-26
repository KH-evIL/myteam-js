var onOff = document.querySelector("input");
var bgColor = document.querySelector("body");
var shadow = document.querySelector("section-text")
var filter = document.querySelector("section-passage")

onOff.addEventListener("click", function () {
    bgColor.classList.toggle("active");
})

onOff.addEventListener("click", function () {
    shadow.classList.toggle("active");
})

onOff.addEventListener("click", function () {
    filter.classList.toggle("active");
})