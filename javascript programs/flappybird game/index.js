let board;
let boardwidth=460;
let boardheight=640;
let context;


let birdwidth=40;
let birdheight=28;
let birdx=boardwidth/8;
let birdy=boardheight/2;
let   birdimage=new Image();;

let bird={
    x:birdx,
    y:birdy,
    width:birdwidth,
    height:birdheight
}

//pipes
let pipearray=[];
let pipewidth=64;
let pipeheight=512;
let pipex=boardwidth;
let pipey=0;

let toppipeimage=new Image();
let bottompipeimage=new Image();


//moving pipes

let pipevelx=-1.5;

//bird jump
let birdvely=0;
let gravity=0.1;

let gameover=false;


//gamescore
let score=0;


window.onload=function(){

    
    board=document.getElementById('board');
    board.height=boardheight;
    board.width=boardwidth;
    context=board.getContext('2d');


   
    toppipeimage.src="toppipe.png";
    bottompipeimage.src='bottompipe.png';

    requestAnimationFrame(update);
    setInterval(placepipes,800);//1.5seconds

    document.addEventListener('keydown',movebird);
    
}

function update(){

    if(gameover)
    {
        return;
       }            

    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    //bird
    if(birdvely>0)
    {  
    birdimage.src="flappy.png";
    birdimage.onload=function(){
    context.drawImage(birdimage,bird.x,bird.y,bird.width,bird.height);
    }
    
}   
else{
    birdimage.src="flappyfly.png";
    birdimage.onload=function(){
    context.drawImage(birdimage,bird.x,bird.y,bird.width,bird.height);
    }
}
    birdvely=birdvely+gravity;
    //bird.y=bird.y+birdvely;
    bird.y=Math.max(bird.y+birdvely,0)//
    context.drawImage(birdimage,bird.x,bird.y,bird.width,bird.height);


    if(bird.y+bird.height/2>board.height){
        gameover=true;
    }

    for(let i=0; i<pipearray.length;i++)
    {
        let pipe=pipearray[i];
        pipe.x=pipe.x+pipevelx;
        context.drawImage(pipe.img,pipe.x,pipe.y,pipe.w,pipe.h);

        //score updatehere
        if(!pipe.passed && bird.x>pipe.x+pipe.w)
        {
            score=score+1;
            pipe.passed=true;
        }

        if(detectcollison(bird, pipe))
        {
                gameover=true;
        }

    }

    while(pipearray.length>0 && pipearray[0].x<-pipewidth)
    {
        pipearray.shift();
    }

    context.fillStyle="black  ";
    context.font='40px verdana ';
    context.fillText(score/2 ,5,35);

    if(gameover)
        {
            context.fillText("gameover",100,50)
        }

}

function placepipes(){
    if(gameover)
    {
        return;
    }

    let randompipey=pipey-pipeheight/4-Math.random()*(pipeheight/2);
    let pipespace=board.height/4;

    let toppipe={
        img: toppipeimage,
        x:pipex,
        y:randompipey,
        w:pipewidth,
        h:pipeheight,
        passed:false//to check bird passes the pipe
    }

    pipearray.push(toppipe);

    let bottompipe={
        img:bottompipeimage,
        x:pipex,
        y:randompipey+pipeheight+pipespace,
        w:pipewidth,
        h:pipeheight,
        passed:false
    }
    pipearray.push(bottompipe);

}


function movebird(event){
        if(event.code=="Space" || event.code=="ArrowUp"){
            birdvely=-4;
        
        
        if(gameover)
        {
            restartGame();
        }
            
    }
    }


    function restartGame() {
        bird.y = birdy;
        birdvely = 0;
        pipearray = [];
        score = 0;
        gameover = false;
        requestAnimationFrame(update);
    }


function detectcollison(b,p){
        return  b.x<p.x+p.w && 
                b.x+ b.width>p.x && 
                b.y<p.y+p.h && 
                b.y+b.height>p.y
            

        }
        
