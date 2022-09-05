const container=document.getElementById('container');
const play=document.getElementById('play');
const strategy=document.getElementById('strategy');
const restart=document.getElementById('restart');
const box=document.getElementById('boxes');

const boxes=box.querySelectorAll(':scope>div');

let turn = 0;

let spaces=[];
const circle='O';
const cross='X';
let currentplayer =circle;
console.log(currentplayer);

const drawboard= ()=>{
    for(i=0;i<9;i++){
        const div =document.createElement('div');
        box.appendChild(div);
        div.setAttribute('id',i);
    }
}


const  drawgame=()=>{
drawboard();
    boxes.forEach((box,i)=>{
    if(i<3){
    box.style['border-bottom']='black solid 1px';
    box.style.margin='0';
    box.style.padding='2.5rem 0 0 0';
    } 
     else if(i>2 && i<6){
        box.style['border-bottom']='black solid 1px';
    box.style.margin='0';
    box.style.padding='2.5rem 0 0 0';
        }  
        else return;
    });
        boxes.forEach((box,i)=>{
            if(i%3==0 ){
                box.style['border-right']='black solid 1px';
            box.style.margin='0';
            box.style.padding='2.5rem 0 0 0';
            }
            else if((i-1)%3==0 ){
                box.style['border-right']='black solid 1px'; 
            box.style.margin='0';
            box.style.padding='2.5rem 0 0 0';
            
            }
        })  ;  
        box.addEventListener('click',boxclicked);
}
const boxclicked=(e)=>{
const id=e.target.id;
if(!spaces[id]){
spaces[id]=currentplayer;
e.target.innerHTML=currentplayer;
++turn;
}

if(turn>4 && playerwon()){
    play.innerText=`${currentplayer} has won!`;
    restartgame();
}
else if(turn>8){
    play.innerText=`Game Draw!`;
    restartgame();
}
currentplayer=currentplayer === circle ? cross:circle;

console.log(currentplayer);
}


const playerwon=()=>{
     
    for(let i=0;i<spaces.length;i+=3){
        if(spaces[i]!== null && spaces[i]===spaces[i+1] && spaces[i+1]===spaces[i+2] ){
            return true;
        }
    }
    for(let i=0;i<Math.sqrt(spaces.length);i++){
        if(spaces[i]!==null && spaces[i]===spaces[i+3] && spaces[i+3]===spaces[i+6]){
            return true;
        }
    }
   
        if(spaces[0]===spaces[4] &&spaces[4]===spaces[8]){return true}
        else if( spaces[2]===spaces[4] && spaces[4]===spaces[6]){return true}
    
}

const draw=()=>{
    let drawcount=1; 
    boxes.forEach((box,i)=>{
if( spaces[i]!==null){
    drawcount++;
}
if(drawcount===9){
return;
}
    })

}

const restartgame =()=>{
    boxes.forEach((box,i)=>{
spaces[i]=null;
box.innerText='';
    })
    function set(){
    
play.innerText="Play";
    }
    setTimeout(set,2000);
turn=0;

}
restart.addEventListener('click',restartgame);
restartgame();
drawgame();


