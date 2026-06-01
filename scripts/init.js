const main_gr =  document.getElementById("main-grid");
let playerPos = 5;
let score = 0;
let wave = 1;
let lives = 3;
let canShoot = true;
let shoottimer = 1000;


print_score()
initialize_spielfeld();
enemy();

