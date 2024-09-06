var boxsize=25;
var rows=35;
var cols=70;
var context;
var board;
var headx1=boxsize;
var heady1=(boxsize*rows)/2 -boxsize-boxsize*3;
var headx2=boxsize*cols-50;
var heady2=(boxsize*rows)/2 -boxsize-boxsize*3;
var ballx = boxsize*rows-12.5;
var bally = (boxsize * rows) / 2 - boxsize/2;
var ballvely=0;
var ballvelx=0;
var headvel1=0;
var headvel2=0;

var bluescore=0;
var redscore=0;
var plateheight=boxsize*6;
var gameover=false;

window.onload = function() {

     canvas = document.getElementById('board');
    canvas.width=cols*boxsize;
    canvas.height=rows*boxsize;
 context = canvas.getContext('2d');
  
        document.addEventListener('keyup',balldirection);
setInterval(plates)    }

function centerline(){
    context.moveTo((cols*boxsize)/2,0);
    context.lineTo((cols*boxsize)/2,rows*boxsize);
    context.strokeStyle='whitesmoke';
    context.stroke();
    
}

function plates()
{
    if(gameover)
    {
        return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    centerline(); 
    if(heady1<boxsize && headvel1==-1)
    {
        headvel1=0;
        heady1=boxsize+1;
    }
    else if( heady1>boxsize*rows-7*boxsize && headvel1==+1 )
    {
        headvel1=0;
        heady1= rows*boxsize-7*boxsize-1;
    }
    
    heady1=heady1+headvel1*4;

        context.fillStyle='red';
   context.fillRect(headx1,heady1,boxsize,plateheight);
   if(heady2<boxsize && headvel2==-1)
    {
        headvel2=0;
        heady2=boxsize+1;
    }
    else if( heady2>boxsize*rows-7*boxsize && headvel2==+1 )
    {
        headvel2=0;
        heady2= rows*boxsize-7*boxsize-1;
    }

    if(bluescore<=10 && redscore<=10)
    {
    context.fillStyle='red';
    context.font='30px Verdana';
    context.fillText(redscore,750,35)
    context.fillStyle='blue';
    context.font='30px Verdana';
    context.fillText(bluescore,975,35)
        if(bluescore==10)
        {
            context.fillStyle='blue';
        context.font='100px Verdana';
        context.fillText("Blue Wins", 1000 ,boxsize*rows/2)
            gameover=true;
        }
        else if(redscore==10 )
        {
            context.fillStyle='red';
        context.font='100px Verdana';
        context.fillText("Red Wins", 200  ,boxsize*rows/2)
            gameover=true;
        }

    }
    
    

   heady2=heady2+headvel2*4;
   context.fillStyle='blue';
   context.fillRect(headx2,heady2,boxsize,plateheight);
   


   if(bally<0 || bally>rows*boxsize -boxsize )
   {
    if(ballvelx>0 && ballvely>0)
    {
        ballvely=-1;
    }
    else if(ballvelx>0&& ballvely<0)
    {
        ballvely=1;
    }
    else if(ballvelx<0 && ballvely<0)
    { 
        ballvely=1;
    }
    else if(ballvelx<0 && ballvely>0)
    {
        ballvely=-1;
    }
   }
//score update
   

   ballx=ballx+ballvelx*4;
   bally=bally+ballvely*4;
   context.fillStyle = 'yellow';
    context.fillRect(ballx, bally, boxsize, boxsize);
    if (ballx <= headx1 + boxsize && ballx + boxsize >= headx1 &&
        bally <= heady1 + plateheight && bally + boxsize >= heady1) {
            
             if(ballvelx<0 && ballvely<0)
            { 
                ballvely=-1
                ballvelx=1
            }
            else if(ballvelx<0 && ballvely>0)
            {
                ballvelx=1
                ballvely=1
            }    }

            if (ballx <= headx2 + boxsize && ballx + boxsize >= headx2 &&
                bally <= heady2 + plateheight && bally + boxsize >= heady2) {
                    if(ballvelx>0 && ballvely<0)
            { 
                ballvely=-1
                ballvelx=-1
            }
            else if(ballvelx>0 && ballvely>0)
            {
                ballvelx=-1
                ballvely=1
            } 
            
        }




        if(ballx>cols*boxsize){
                redscore=redscore+1;
                 ballx = boxsize*rows-12.5;
                 bally = (boxsize * rows) / 2 - boxsize/2;
                context.fillStyle = 'yellow';
         context.fillRect(ballx, bally, boxsize, boxsize);
         ballvelx=1;
         ballvely=-1;
        }
             if( ballx< -(boxsize)   ){
               
                bluescore=bluescore+1;
                 ballx = boxsize*rows-12.5;
             bally = (boxsize * rows) / 2 - boxsize/2;
                context.fillStyle = 'yellow';
                context.fillRect(ballx, bally, boxsize, boxsize);
                ballvelx=-1;
         ballvely=1;
                

        
        } 
    }

 
function balldirection(e){
    if(e.code=='Space')
    {
        if(ballvelx==0 && ballvely==0){
            ballvelx=-1;
        ballvely= +1 ;
        }
        else{
        ballvelx=0;
        ballvely=0;
        }}
    
     if(e.code=='ArrowUp')
    {
        headvel1=-1;
    }
    else if(e.code=='ArrowDown')
    {
        headvel1=+1;
    }
    else if(e.code=='KeyW')
    {
        headvel2=-1;
    }
    else if(e.code=='KeyS')
    {
        headvel2=+1;
    }
}