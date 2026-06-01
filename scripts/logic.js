//Logik für einen Laser
async function laser(laserPos, richtung) {
    let end = false;
    let feld1 = true;
    let fullLaserPos;
    while (!end) {

        fullLaserPos = [laserPos[0], laserPos[1] + richtung];

        //Wenn Laser auf Player trift
        if (!feld1){ 
        if (fullLaserPos[1] == 8 && fullLaserPos[0] == fullPlayerPos) {
            lives -= 1;
            print_score();
            if (lives == 0) {
                lose();
            }
            end = true;
            break;
        }
        }
        //Wenn Laser auf Alien trift 
        if (fullLaserPos[1] < 5 && alienPos[fullLaserPos[0]][fullLaserPos[1]] === "alien") {
            kill(fullLaserPos);
            end = true;

        }

        //Platziert Laser in den Laser Speicher
        for (let i = 0; i < 80; i++) {

            if (feld1) {
                laserPos = [laserPos[0], laserPos[1] + richtung];
                feld1 = false;
                break;
            }

            else {
                laserPos = [laserPos[0], ((laserPos[1] * 80) + ((richtung / 80) * 80)) / 80];
            }
            if (richtung == -1) {
                laserData.push([laserP, laserPos])
            }
            if (richtung == 1) {
                laserData.push([laserA, laserPos])
            }
            await sleep(5);
        }

        //Wenn Laser am Ende ankommt
        if (fullLaserPos[1] < -1 || fullLaserPos[1] > 9) {
            end = true;
        }
    }
}


//"Tötet" den getroffenen Alien und verteilt Punkte
async function kill(laserPos) {
    await sleep(500);
    alienPos[laserPos[0]][laserPos[1]] = "clear";
    score += 100;
    if (score % 5500 == 0) {
        wave += 1;
        if (shoottimer > 200) {
            shoottimer -= 50
        }
        initialize_aliens();
    }
    print_score();
}

//lässt die Alien schießen
async function enemy() {
    while (spiel) {
        let alienShoot = getRandomInt(10);
        await sleep(shoottimer);
        if ( alienPos[alienShoot][0] === "alien") {
            for (i = 0; i < 5; i++) {
                if (alienPos[alienShoot][i] === "clear") {
                    laser([alienShoot, i - 1], 1)
                    break;
                }
                if(i == 4){
                    laser([alienShoot, i], 1)
                }
            }
        }
    }
}

// Startet das Spiel neu
async function lose() {
    spiel = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("GAME", 400, 240)
    ctx.fillText("OVER", 400, 280)

    await sleep(2500)
    window.location.reload();
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}