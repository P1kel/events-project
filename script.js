const colorDisplay = document.getElementById("color-display");

const aquaButton = document.getElementById("aqua");
const tealButton = document.getElementById("teal");
const pinkButton = document.getElementById("pink");
const purpleButton = document.getElementById("purple");
const colorlessButton = document.getElementById("colorless");

aquaButton.addEventListener("click", function () {
colorDisplay.style.backgroundColor = "aqua";
colorDisplay.textContent = "aqua";
});

tealButton.addEventListener("click", function () {
colorDisplay.style.backgroundColor = "teal";
colorDisplay.textContent = "teal";
});

pinkButton.addEventListener("click", function () {
colorDisplay.style.backgroundColor = "pink";
colorDisplay.textContent = "pink";
});

purpleButton.addEventListener("click", function () {
colorDisplay.style.backgroundColor = "purple";
colorDisplay.textContent = "purple";
});

colorlessButton.addEventListener("click", function () {
colorDisplay.style.backgroundColor = "white";
colorDisplay.textContent = "colorless";
});