let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let winmess = document.querySelector(".win");
let msggcont = document.querySelector(".msg-container");

let turnO = true; 
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msggcont.classList.add("hide");
};

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO= true;
        };
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
 });

const gameDraw = ()=> {
    winmess.innerText =`Game Draw !!`;
    msggcont.classList.remove("hide");
    disableboxes();

};



 const disableboxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    };
 };

 const enableboxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";
    };
 };


 

const showWinner = (winner)=>{
    winmess.innerText = `congratulations, Winner is ${winner}`;
    msggcont.classList.remove("hide");
    disableboxes();
};

 const checkWinner = ()=> {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val== pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            };
        };
    };
 };

 newbtn.addEventListener("click", resetGame);
 resetbtn.addEventListener("click",resetGame);