const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];
var cell;
var maze=document.getElementById("maze");
var rowMaze;
var player=document.getElementById("player");
var tmpX;
var tmpY;
var topPoint=8;
var leftPoint=8;
var playerWon=false;
drawMaze();

movePlayer = function (event) {
       topPoint=8;
       leftPoint=8;
       console.log(tmpX,tmpY);
       switch (event.key){
       
            case "ArrowUp":
                    if (tmpX>0 && tmpX<14){ 
                        if  (map[tmpX-1][tmpY]==" ") {
                           tmpX=tmpX-1;
                        }   
                        else if (map[tmpX-1][tmpY]=="F"){
                            playerWon=true
                        }   
                    } 
                    break;
            case "ArrowDown":
                    if (tmpX>0 && tmpX<14) {
                      if (map[tmpX+1][tmpY]==" "){
                        tmpX=tmpX+1;
                      } 
                      else if (map[tmpX+1][tmpY]=="F"){
                        playerWon=true
                      } 
                    }
                    break;
            case "ArrowRight":
                    if (tmpY>=0 && tmpY<21){ 
                     if (map[tmpX][tmpY+1]==" ") {
                        tmpY=tmpY+1;
                    } 
                    else if (map[tmpX][tmpY+1]=="F"){
                        playerWon=true
                      } 
                    }
                    break;
            case "ArrowLeft":
                    if (tmpY>0 && tmpY<21) {
                     if ((map[tmpX][tmpY-1]==" ")||(map[tmpX][tmpY-1]=="S")){
                        tmpY=tmpY-1;
                     }  
                     else if (map[tmpX][tmpY-1]=="F"){
                        playerWon=true
                     }
                    } 
                    break;
                     
        }
        topPoint+=tmpX*20;
        leftPoint+=tmpY*20;  
        player.style.top = topPoint+"px";
        player.style.left = leftPoint+"px"; 
        if (playerWon){
           alert("You've finished the Maze");
           window.location.reload(true);
        } 
  
}

function drawMaze(){
    player.setAttribute("class","player");
    
    var startCellId;
    for (let i=0;i<map.length;i++){
        rowMaze=document.createElement("div");
        rowMaze.setAttribute("class","row");
        row=map[i];
        console.log(row,row.length);
        for (let j=0;j<row.length;j++){
            cell=document.createElement("div");
            if (row[j]=='W'){
            cell.setAttribute("class","cellW");
            } 
            else if (row[j]=='S'){
                topPoint+=i*20;
                leftPoint+=j*20;
                tmpX=i;
                tmpY=j;
                startCellId="cell"+i+j;
                cell.setAttribute("class","cellS");              
            } 
            else{
                cell.setAttribute("class","cellE");
                cell.textContent=row[j];
            }
            rowMaze.appendChild(cell);
        }
    maze.appendChild(rowMaze);
    }
    player.style.top = topPoint+"px";
    player.style.left = leftPoint+"px";
}

document.addEventListener("keydown",movePlayer);