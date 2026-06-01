const main_gr = document.getElementById("main-grid");
const canvas = document.getElementById("space");
const player = document.getElementById("player");
const alien = document.getElementById("alien");
const laserA = document.getElementById("laserA");
const laserP = document.getElementById("laserP");
const ctx = canvas.getContext("2d");
let spiel = true;
let playerPos = 5;
let fullPlayerPos = 5;
let laserData = [];
let alienPos = [];
let score = 0;
let wave = 1;
let lives = 3;
let canShoot = true;
let move = false;
let geShooted = false;
let shoottimer = 1000;

print_score()
initialize_spielfeld();
enemy();