var playerTrack = document.getElementById("playerTrack");
var playerTrack2 = document.getElementById("playerTrack2");
var square = document.getElementById("squareSVG");
var container = document.getElementById("textHeader");
var msganglogo = document.getElementById("msganglogo");
var player = document.getElementById("player");
var player3 = document.getElementById("player3");
var interval = 200; // 200ms interval for audio fade
let mouseHover = false;
var placeholder = false;

player.volume = 0.1;


container.addEventListener("mouseover", hoverOverCenter, false);
container.addEventListener("mouseleave", mouseOutCenter, false);

function hoverOverCenter(){
    if (placeholder === false){
        square.setAttribute("style", "transform: translate(-50%, -50%) scale(0.8); stroke-width: 3px; fill: #dfe8ea;");
        msganglogo.setAttribute("style", "opacity: 100; transform: translate(-50%, -50%) scale(0.8);");
        mouseHover = true;
        setInterval(function(){
        if (player.volume < 0.5 && mouseHover === true){
            player.volume += 0.025;
        } else if (player.volume > 0.5){
            return;
        }
    }, 75);
    }    
}
function mouseOutCenter(){
    if (placeholder === false){
        square.setAttribute("style", "");
        msganglogo.setAttribute("style", "");
        mouseHover = false;
        setInterval(function(){
        if (player.volume > 0.1){
            player.volume -= 0.025;
        } else if (player.volume < 0.1){
            return;
        }
    }, 75);
    }
}

function quiet() {
    player.pause();
    player2.volume = 0.5;
    player2.play();
    msganglogo.setAttribute("style", "opacity: 100; z-index: 11;");
    container.setAttribute("style", "opacity: 100;");
    square.setAttribute("style", "transition: 1s ease all; transform: translate(-50%, -50%) scale(3); stroke-width: 3px; fill: #dfe8ea; z-index: 10;");
    placeholder = true;
}

square.addEventListener("click", closer, false);

function closer(){
    if (placeholder === true){
        
    }
}



//mix-blend-mode: difference;

player2.addEventListener("ended", function(){
    player3.play();
});
var buffer = 1;
if(player3.currentTime > player3.duration - buffer){
    player3.currentTime = 0;
    player3.play();
}