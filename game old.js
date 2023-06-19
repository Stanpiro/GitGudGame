let cost = document.getElementById('XP');

// xp
let exp = document.getElementById('lvlUp');
let xp = document.getElementById('XP');
let experience = 0

exp.addEventListener('click', function () {
        experience += 1 + perstrain;
        xp.innerHTML = experience
});

// str
let str = document.getElementById('lvlStr');
let strg = document.getElementById('str');
let strength = 1;

str.addEventListener('click', function (){
    if (experience <= 9) {
        getElementById("lvlStr").disabled;
    }
    strength += 1;
    experience -= 10; 
    strg.innerHTML = strength;
    cost.innerHTML = experience;
});

// int
let int = document.getElementById('lvlInt');
let intel = document.getElementById('int');
let intelect = 1;

int.addEventListener('click', function () {
    if (experience <= 9) {
        getElementById("lvlInt").disabled;
    }
    intelect += 1;
    experience -= 10;
    intel.innerHTML = intelect;
    cost.innerHTML = experience;
});

// arm
let arm = document.getElementById('lvlArm');
let armo = document.getElementById('arm');
let armor = 1;

arm.addEventListener('click', function () {
    if (experience <= 9) {
        getElementById("lvlArm").disabled;
    }
    armor += 1;
    experience -= 10;
    armo.innerHTML = armor;
    cost.innerHTML = experience;
});

// hp
let hp = document.getElementById('lvlHp');
let hitp = document.getElementById('hp');
let hitPoints = 100;

hp.addEventListener('click', function () {
    if (experience <= 1) {
        getElementById("lvlHp").disabled;
    }
    hitPoints += 4 + strength;
    experience -= 2;
    hitp.innerHTML = hitPoints;
    cost.innerHTML = experience;
});

// mana
let mn = document.getElementById('lvlMana');
let man = document.getElementById('mana');
let mana = 100;

mn.addEventListener('click', function () {
    if (experience <= 1) {
        getElementById("lvlMana").disabled;
    }
    mana += 1 + intelect;
    experience -= 2;
    man.innerHTML = mana;
    cost.innerHTML = experience;
});

// weapon
let wp = document.getElementById('lvlWeapon');
let weap = document.getElementById('weapon');
let weapon = 1;

wp.addEventListener('click', function () {
    if (experience <= 9) {
        getElementById("lvlWeapon").disabled;
    }
    weapon += 1;
    experience -= 10;
    weap.innerHTML = weapon;
    cost.innerHTML = experience;
});

// PT
let pt = document.getElementById('lvlPt');
let pert = document.getElementById('pt');
let perstrain = 0;

pt.addEventListener('click', function () {
    if (experience <= 49) {
        getElementById("lvlPt").disabled;
    }
    perstrain += 1;
    experience -= 50;
    pert.innerHTML = perstrain;
    cost.innerHTML = experience;
});