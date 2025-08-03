let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGame");
let newBtn = document.querySelector("#newGame");
let msgCont = document.querySelector(".msgCont");
let msg = document.querySelector(".msg");

let turn0 = true;
let count = 0;
const winPattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const newGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  count = 0;
  msgCont.classList.add("hide");
};
const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  count = 0;
  msgCont.classList.add("hide");
};

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulation, Winner is "${winner}"`;
  disableBtn();
  msgCont.classList.remove("hide");
};

const matchDraw = () => {
  msg.innerText = "Match Draw, Start new game...";
  disableBtn();
  msgCont.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#b0413e";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattren of winPattrens) {
    let pos1 = boxes[pattren[0]].innerText;
    let pos2 = boxes[pattren[1]].innerText;
    let pos3 = boxes[pattren[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos1 == pos3) {
        showWinner(pos1);
      }
    }
  }
  count++;
  if (count == 9) {
    matchDraw();
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);
