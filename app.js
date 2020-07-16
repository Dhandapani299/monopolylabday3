var board = [
  10,
  20,
  30,
  40,
  50,
  60,
  70.8,
  90,
  100,
  110,
  120,
  130,
  140,
  150,
  160,
];
console.log(board);
var player1_button = document.getElementById("player-1");
var player2_button = document.getElementById("player-2");
console.log(player1_button);

player1_button.addEventListener("click", rolldice_1);
player2_button.addEventListener("click", rolldice_2);
var player1 = ["prograd", 0, 1000];
var player2 = ["faceprep", 0, 1000];

function rolldice_1() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("player one role", position);
  change_position(player1[1], position);
}

function change_position(old, currentpos) {
  let newposition = old + currentpos;
  player1[1] = newposition;
  console.log(player1[1]);
  updatemoney_1(player1[1]);
}

function updatemoney_1(p1) {
  var updatemoney = 0;
  if (p1 < board.length) updatemoney = player1[2] - board[p1 - 1];
  else {
    p1 = p1 % 15;
    updatemoney = player1[2] - board[p1 - 1];
  }
  player1[1] = updatemoney;
  console.log("player-1 Data Money", player1[1]);
}

function rolldice_2() {
  let position = Math.floor(Math.random() * 6 + 1);
  console.log("player one role", position);
  chage_position2(player2[1], position);
}

function chage_position2(old, currentpos) {
  let newposition = old + currentpos;
  player2[1] = newposition;
  console.log(player2[1]);
  updatemoney_2(player2[1]);
}

function updatemoney_2(p2) {
  var updatemoney = 0;
  if (p2 < board.length) {
    updatemoney = player2[2] - board[p2 - 1];
  } else {
    p2 = p2 % 15;
    updatemoney = player2[2] - board[p2 - 1];
  }
  player2[1] = updatemoney;
  console.log("updatemoney", updatemoney);
}
