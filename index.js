const roll = () =>{
    let x=Math.floor(Math.random()*(6)+1);
    dice.innerText=x+"";
    setTimeout(function(){update(x);},2000);
}
const update = (x) => {
    let old1=document.getElementById('box'+curr1);
    let old2=document.getElementById('box'+curr2);
    if (turn==1){
        curr1+=x;
        if (curr1>100){
            dice.innerText="Too much";
            curr1-=x;
            turn=2;
            setTimeout(function(){nextturn();},2000);
        }
        else{
            if (snakes[curr1]!=null) curr1=snakes[curr1];
            else if(ladders[curr1]!=null) curr1=ladders[curr1];
            dice.innerText="Player 1: "+curr1;
            if (curr1==curr2){
                old1.style.backgroundColor="lightseagreen";
                old2.style.backgroundColor="rgb(144, 0, 255)";
            }
            else{
                let new1=document.getElementById('box'+curr1);
                old1.style.backgroundColor="lightseagreen";
                new1.style.backgroundColor="red";
                old2.style.backgroundColor="blue";
            }
            turn=2;
            if (curr1==100) setTimeout(function(){win(1);},2000);
            else setTimeout(function(){nextturn();},2000);
        }
    }
    else{
        curr2+=x;
        if (curr2>100){
            dice.innerText="Too much";
            curr2-=x;
            turn=1;
            setTimeout(function(){nextturn();},2000);
        }
        else{
            if (snakes[curr2]!=null) curr2=snakes[curr2];
            else if(ladders[curr2]!=null) curr2=ladders[curr2];
            dice.innerText="Player 2: "+curr2;
            if (curr1==curr2){
                old2.style.backgroundColor="lightseagreen";
                old1.style.backgroundColor="rgb(144, 0, 255)";
            }
            else{
                old2.style.backgroundColor="lightseagreen";
                let new2=document.getElementById('box'+curr2);
                new2.style.backgroundColor="blue";
                old1.style.backgroundColor="red";
            }
            turn=1;
            if (curr2==100) setTimeout(function(){win(2);},2000);
            else setTimeout(function(){nextturn();},2000);
        } 
    }
    
}
const nextturn = () => {
    dice.innerText="ROLL DICE";
}

const win = (a) => {
    dice.innerText="WINNER: "+a;
    if (a==1){
        score1++;
        s1.innerText="Player 1: "+score1;
    }
    else{
        score2++;
        s2.innerText="Player 2: "+score2;
    }
    setTimeout(function(){reset();},2000);
}

const reset = () => {
    let hi1=document.getElementById('box'+curr1);
    let hi2=document.getElementById('box'+curr2);
    hi1.style.backgroundColor="lightseagreen";
    hi2.style.backgroundColor="lightseagreen";
    dice.innerText="ROLL DICE";
    curr1=1;
    curr2=1;
    turn=1;
    let hi=document.getElementById('box1');
    hi.style.backgroundColor="rgb(144, 0, 255)";
}

let curr1=1,curr2=1;
let turn=1;
let s=document.getElementById("random");
let score1=0,score2=0;
let s1=document.getElementById("player1");
let s2=document.getElementById("player2");

let snakes= {
    27:6,
    40:3,
    43:18,
    54:31,
    66:45,
    76:58,
    99:44
};

let ladders= {
    4:25,
    13:46,
    33:49,
    42:63,
    62:81,
    74:92
};

