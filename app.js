let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");

let playerO = true;

let winpatters  = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


rstbtn.addEventListener("click", ()=>{
    resetGame();
});


const resetGame = () =>{
    playerO = true;
    enableBoxes();
    document.querySelector(".heading").innerText ="Welcom To The Game";
    for(box of boxes){
        box.innerText = "";
        box.style.color = "#b0413e"
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(playerO){
            box.innerText = "O";
            box.style.color = "blue";
            playerO = false;
        }
        else{
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;


        checkWinner();
       
    });
});


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
};

const checkWinner = ()=>{
    for(let pattern of winpatters){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBoxes();
                document.querySelector(".heading").innerText = "winner is "+pos1;

            }
        }
    }
};


