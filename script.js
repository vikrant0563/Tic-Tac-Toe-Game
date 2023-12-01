console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let turnMsc = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let gameovr = false;

//function for change the turn
const changeTurn=()=>{
    return turn === "X" ? "0" :"X";
}

//function to check for win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
   wins.forEach(e=>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '')){
        document.querySelector(".info").innerText = boxText[e[0]].innerText + "  Won";
        gameovr = true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
        
    }
   })
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".box-text");
    element.addEventListener('click',()=>{
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            turn = changeTurn();
            turnMsc.play();
            checkWin();
            if(!gameovr){
                  document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
            }
          
        }
    })
})

// click on reset button
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll(".box-text");
    Array.from(boxText).forEach(element =>{
        element.innerHTML = "";
    });
    turn = "X";
    gameovr = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
})