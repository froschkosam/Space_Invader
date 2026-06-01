//Fliegt nach links
async function links() {
    if (fullPlayerPos - 1 > -1) {
        fullPlayerPos -= 1;
        move = true;
        for (let i = 0; i < 80; i++) {
            playerPos = ((playerPos*80) - ((1 / 80)*80))/80;
            await sleep(5);
        }
        move = false;
    }
}

//Fliegt nach rechts
async function rechts() {
    if (fullPlayerPos + 1 < 11) {
        fullPlayerPos += 1;
        move = true;
        for (let i = 0; i < 80; i++) {
            playerPos = ((playerPos*80) + ((1 / 80)*80))/80;
            await sleep(5);
        }
        move = false;
    }
}

//Sagt der Laserfabrik das geschossen wurde
function shoot() {
    if (canShoot && !move) {
        geShooted = true;
    }
}

//Inputs
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