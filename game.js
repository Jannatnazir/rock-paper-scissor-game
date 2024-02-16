let user_score=0;
let comp_score= 0;
let choices =document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore =document.querySelector("#user_score");
let compscore=document.querySelector("#comp_score");

let gen_comp_choice =(()=>{

    let options =["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3) //random number 0 sa 2 tk , math.floor decimals ko hatana ka liya
    return options[index];
});

    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            let user_choice =choice.getAttribute("id");
            play_game(user_choice);
        })

          });

const play_game=(user_choice)=>{
console.log("user_choice =", user_choice);
const comp_choice =gen_comp_choice();
console.log("comp_choice =",comp_choice);
//draw game
if (user_choice===comp_choice){
    draw();
}
else{
let user_win = true;
if(user_choice ==="rock"){ //paper,scissor
    user_win = comp_choice==="paper"?false:true;
}
else if(user_choice==="paper") //rock, scissor
{
    user_win = comp_choice==="scissor"?false:true;
}
else { //rock,paper
    user_win = comp_choice ==="rock"?false:true;
}
show_winner(user_win ,user_choice,comp_choice);
}
}
const draw=()=>{
    console.log("game is draw");
    msg.innerText ="Game draw try again";
    msg.style.backgroundColor ="rgb(82, 26, 72) ";
}
show_winner=(user_win, user_choice , comp_choice)=>{
    if (user_win){
        user_score++;
        userscore.innerText = user_score;
        console.log("You win");
        msg.innerText =`You win! your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor ="green";

    }
        
        
    else {
        comp_score++;
        compscore.innerText = comp_score;
        console.log("you loose");
        msg.innerText =`You lost! ${comp_choice} beats ${user_choice}`;
        msg.style.backgroundColor ="red";
    
    }
}



