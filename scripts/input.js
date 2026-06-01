function links(){
    if (playerPos -1 > -1){
    bewegen(-1);
    }
}

function rechts(){
    if (playerPos + 1 < 11){
        bewegen(1);
        }
}

function shoot(){

    if (canShoot) {
        canShoot = false;
        let laserPos = [8,playerPos]
        laser(laserPos, -1)

        setTimeout(() => {
            canShoot = true;
          }, 700);
    }
}



window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'w':
            shoot();
            break;
        case ' ':
            shoot();
            break;
        case 'ArrowUp':
            shoot();
            break;
        case 'a':
            links();
            break;
        case 'ArrowLeft':
            links();
            break;
        case 'ArrowRight':
            rechts();
            break;
        case 'd':
            rechts();
            break;
        default:
            return;
    }
}, true);