//gibt die Spielwerte aus 
function print_score() {
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("wave").innerHTML = "Wave: " + wave;
    document.getElementById("lives").innerHTML = "Lives: " + lives;
}

//Spielstart Aufstellung
function initialize_spielfeld() {
    ctx.font = "30px h2";
    ctx.fillStyle = "snow";
    ctx.fillText("GAME", 400, 240)
    ctx.fillText("START", 400, 280)

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        initialize_aliens();
        draw_space();
    }, 1000);

}

//erschaft Aliens in der Datenbank
function initialize_aliens() {
    for (let x = 0; x < 11; x++) {
        alienPos[x] = []
        for (let y = 0; y < 5; y++) {
            alienPos[x][y] = "alien";
        }
    }
}

//"Spawnt" die Aliens
function draw_aliens() {
    for (let x = 0; x < 11; x++) {
        for (let y = 0; y < 5; y++) {
            if (alienPos[x][y] === "alien") {
                ctx.drawImage(alien, x * 80, y * 80, 80, 80);
            }
        }
    }
}

//"Spawnt" den Spieler
function draw_player() {
    if (playerPos == 12) {
        playerPos = 11;
    }
    ctx.drawImage(player, playerPos * 80, 8 * 80, 80, 80);
}

//"Spawnt" die Laser
async function draw_laser() {
    if (geShooted) {
        geShooted = false;
        canShoot = false;
        let laserPos = [fullPlayerPos, 8]
        laser(laserPos, -1)
        setTimeout(() => {
            canShoot = true;
        }, 1000);

    }

   while (laserData.length != 0) {
        ctx.drawImage(laserData[0][0], laserData[0][1][0] * 80, laserData[0][1][1] * 80, 80, 80);
        laserData.shift();
    }

}

//"Rendert" das Spiel
async function draw_space() {
    while (spiel) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw_aliens();
        draw_player();
        draw_laser();
        await sleep(5);
    }
}