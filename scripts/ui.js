function print_score(){
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("wave").innerHTML = "Wave: " + wave;
    document.getElementById("lives").innerHTML = "Lives: "+ lives;
}

function initialize_spielfeld(){
    let zeilen = 0;
    for (let i=0; i < 11; i ++){
        let spalte = 0;
        for (let j=0; j < 9; j ++){
            const element = document.createElement("div");
            element.id = [spalte,zeilen];
            element.className = "clear";
            element.innerHTML = "<img src='Images/clear.png' style='height: 80px; width:80px'>";
            main_gr.appendChild(element);
            spalte ++;
        }
        zeilen ++;
    }
    document.getElementById([3,5]).innerHTML = "<h2 style='color: snow;'>GAME START</h2>";
    
    setTimeout(() => {
        initialize_aliens();
        initialize_player();
      }, 1000);
   
}

function initialize_aliens(){
    for (let zeilen=0; zeilen < 5; zeilen ++){
        for (let spalte=0; spalte < 11; spalte ++){
            document.getElementById([zeilen ,spalte]).innerHTML = "<img src='Images/alien.png' style='height: 80px; width:80px'>";
            document.getElementById([zeilen ,spalte]).id= [zeilen ,spalte];
            document.getElementById([zeilen ,spalte]).className = "alien"
        }
    }
}

function initialize_player(){
    document.getElementById([8,playerPos]).innerHTML = "<img src='Images/player.png' style='height: 80px; width:80px'>";
    document.getElementById([8,playerPos]).className = [8,playerPos];
    document.getElementById([8,playerPos]).id = "player"
}

