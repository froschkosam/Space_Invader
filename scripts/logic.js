function bewegen(richtung){
    playerPos += richtung;
    let lastPos = document.getElementById("player").className;
    document.getElementById("player").innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
    document.getElementById("player").className = "clear";
    document.getElementById("player").id = lastPos;
    initialize_player();
}

async function laser(laserPos, richtung){
    let feld1 = true;
    while (true){
        laserPos = [laserPos[0]+ richtung ,laserPos[1]]
        if (!feld1){
            document.getElementById([laserPos[0]-richtung, laserPos[1]]).innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
            document.getElementById([laserPos[0]-richtung, laserPos[1]]).className = "clear";
        }
        else {
            feld1 = false;
        }
        if (document.getElementById("player").className == laserPos){
            lives -= 1;
            print_score();
            if (lives == 0){
               lose();
            }
        }
        if (document.getElementById(laserPos).className == "laser"){
            document.getElementById(laserPos).innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
            document.getElementById(laserPos).className = "clear";
            break;
        }

        if (document.getElementById(laserPos).className == "alien"){
            kill(laserPos);
            break;
        }

        else{
            document.getElementById(laserPos).className = "laser";
            if (richtung == -1){
                document.getElementById(laserPos).innerHTML = "<img src='Images/laserP.png' style='height: 80px; width:80px'>";
                
            }
            if (richtung == 1){
                document.getElementById(laserPos).innerHTML = "<img src='Images/laserA.png' style='height: 80px; width:80px'>";
            }
        }
        await sleep(250);
        
    }

}

function kill (laserPos){
    document.getElementById(laserPos).innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
    document.getElementById(laserPos).className = "clear";
    score += 100;
    if (score % 5500 == 0 ){
        wave += 1;
        if (shoottimer > 200){
        shoottimer -= 50 
        }
        initialize_aliens();
    }
    print_score();
}

async function enemy (){
    
    while (true){
        let alienPos = getRandomInt(10);
        await sleep(shoottimer);
        if (document.getElementById([0, alienPos]).className == "alien" ){
            for (i=1; i<6; i++){
                if (document.getElementById([0 + i, alienPos]).className == "clear" ){
                    laser([0 + i -1, alienPos], 1)        
                    break;
                }
            }
        }
    }
}

function lose() {
    let lastPos = document.getElementById("player").className;
    document.getElementById("player").innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
    document.getElementById("player").className = "clear";
    document.getElementById("player").id = lastPos;
    let zeilen = 0;
    for (let i=0; i < 11; i ++){
        let spalte = 0;
        for (let j=0; j < 9; j ++){
            document.getElementById([spalte,zeilen]).className = "clear";
            document.getElementById([spalte,zeilen]).innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
            spalte ++;
        }
        zeilen ++;
    document.getElementById([3,5]).innerHTML = "<h2 style='color: snow;'>GAME OVER</h2>";
    }
    setTimeout(() => {
        window.location.reload();
      }, 2500);
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
      }