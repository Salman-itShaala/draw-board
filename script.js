const boxes = document.querySelectorAll(".child");
const color = "black";

// onmousedown
let isMouseClicked = false;

document.onmousedown = () => {
  isMouseClicked = true;
};

// onmouseup
document.onmouseup = () => {
  isMouseClicked = false;
};

for (let i = 0; i <= 64; i++) {
  boxes[i].onmouseenter = () => {
    if (isMouseClicked === true) {
      boxes[i].style.backgroundColor = color;
    }
  };
}
