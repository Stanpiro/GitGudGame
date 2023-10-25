//Player
const xp = document.getElementById("XP");
const hp = document.getElementById("hp");
const mana = document.getElementById("mana");
const str = document.getElementById("str");
const int = document.getElementById("int");
const weapon = document.getElementById("weapon");
const armor = document.getElementById("arm");
const pt = document.getElementById("pt");
const gold = document.getElementById("gold");
const dmgN = document.getElementById("dmgN");
const spelldmgN = document.getElementById("spelldmgN");
const score = document.getElementById("SC");

//Buttons
const lvlUp = document.getElementById("lvlUp");
const lvlHp = document.getElementById("lvlHp");
const lvlMana = document.getElementById("lvlMana");
const lvlStr = document.getElementById("lvlStr");
const lvlInt = document.getElementById("lvlInt");
const lvlWeapon = document.getElementById("lvlWeapon");
const lvlArm = document.getElementById("lvlArm");
const lvlPt = document.getElementById("lvlPt");

//att Buttons
const eLAtt = document.getElementById("eLAtt");
const eLSpl = document.getElementById("eLSpl");

const eCAtt = document.getElementById("eCAtt");
const eCSpl = document.getElementById("eCSpl");

const eRAtt = document.getElementById("eRAtt");
const eRSpl = document.getElementById("eRSpl");

//Stats
let currXP = 0;
let currHP = 100;
let currMana = 100;
let currStr = 1;
let currInt = 1;
let currWeapon = 0;
let currArmor = 0;
let currPT = 0;
let currDmg = 1;
let currGold = 0;
let currDmgSpell = 8;
let currScore = 0;

//functions
const costXP = function (x) {
  currXP -= x;
  xp.textContent = currXP;
};

const costGold = function (x) {
  currGold -= x;
  gold.textContent = currGold;
};

const costMana = function () {
  currMana -= 8 + Math.round(currInt / 2);
  mana.textContent = currMana;
};

const addDMG = function (x) {
  currDmg += x;
  dmgN.textContent = currDmg;
};

const addDMGSpell = function (x) {
  currDmgSpell += x;
  spelldmgN.textContent = currDmgSpell;
};

const addScore = function (x) {
  currScore += x;
  score.textContent = currScore;
};

//game
lvlUp.addEventListener("click", function () {
  currXP += 1 + currPT;
  xp.textContent = currXP;
});

lvlHp.addEventListener("click", function () {
  if (currXP > 4) {
    currHP += 4 + currStr;
    hp.textContent = currHP;
    costXP(5);
  }
});

lvlMana.addEventListener("click", function () {
  if (currXP > 4) {
    currMana += 2 + currInt;
    mana.textContent = currMana;
    costXP(5);
  }
});

lvlStr.addEventListener("click", function () {
  if (currXP > 9) {
    currStr++;
    addDMG(1);
    str.textContent = currStr;
    costXP(10);
  }
});

lvlInt.addEventListener("click", function () {
  if (currXP > 9) {
    currInt++;
    addDMGSpell(3);
    int.textContent = currInt;
    costXP(10);
  }
});

lvlPt.addEventListener("click", function () {
  if (currXP > 49) {
    currPT++;
    pt.textContent = currPT;
    costXP(50);
  }
});

lvlWeapon.addEventListener("click", function () {
  if (currGold > 9) {
    currWeapon++;
    weapon.textContent = currWeapon;
    addDMG(3);
    costGold(10);
  }
});

lvlArm.addEventListener("click", function () {
  if (currGold > 9) {
    currArmor++;
    armor.textContent = currArmor;
    costGold(10);
  }
});

//time
const sec = document.getElementById("sec");
const minu = document.getElementById("minu");
let seconds = 0;
let minutes = 0;

const time = function () {
  if (seconds === 59) {
    seconds = 0;
    sec.textContent = "0" + seconds;
    if (minutes <= 8) {
      minutes++;
      minu.textContent = "0" + minutes;
    } else {
      minutes++;
      minu.textContent = minutes;
    }
  } else if (seconds <= 8) {
    seconds++;
    sec.textContent = "0" + seconds;
  } else {
    seconds++;
    sec.textContent = seconds;
  }
};

let timeNow = setInterval(time, 1000);

//highscore

//enemies
const enemy_0 = {
  numb: 0,
  name: "Orc",
  lvl: 1,
  hp: 160,
  armor: 2,
  weapon: 2,
  img: "images/enemy-0.png",
  attSpeed: 4000,
};

const enemy_1 = {
  numb: 1,
  name: "Barbarian",
  lvl: 1,
  hp: 100,
  armor: 1,
  weapon: 3,
  img: "images/enemy-1.png",
  attSpeed: 2000,
};

const enemy_2 = {
  numb: 2,
  name: "Spider",
  lvl: 1,
  hp: 60,
  armor: 1,
  weapon: 2,
  img: "images/enemy-2.png",
  attSpeed: 700,
};

const enemy_3 = {
  numb: 3,
  name: "Mage",
  lvl: 1,
  hp: 80,
  armor: 1,
  weapon: 6,
  img: "images/enemy-3.png",
  attSpeed: 5000,
};

//elites
const elite_0 = {
  numb: 1,
  name: "Cerberus",
  lvl: 1,
  hp: 300,
  armor: 4,
  weapon: 6,
  img: "images/elite-0.png",
  attSpeed: 3500,
};

const elite_1 = {
  numb: 6,
  name: "Demon",
  lvl: 1,
  hp: 666,
  armor: 6,
  weapon: 6,
  img: "images/elite-1.png",
  attSpeed: 6660,
};

const enemyAll = [enemy_0, enemy_1, enemy_2, enemy_3];
const eliteAll = [elite_0, elite_1];
const attackSpeedSlot = [0, 0, 0, 0];
const eliteSlot = [0, 0, 0, 0];
//combat enemy

const callEnemy = function () {
  const ranType = Math.trunc(Math.random() * 100);
  const ranEnemy = Math.trunc(Math.random() * enemyAll.length);
  const ranEnemyElite = Math.trunc(Math.random() * eliteAll.length);
  const slotEnemy = Math.trunc(Math.random() * 3) + 1;
  const enemLvl = document.getElementById(`lvl-${slotEnemy}`);
  const enemy = enemyAll[ranEnemy];
  const enemyElite = eliteAll[ranEnemyElite];
  if (document.querySelector(`.eImage-${slotEnemy}`).src) {
    stop;
  } else if (ranType <= 10 && minutes > 1) {
    document.querySelector(`.eImage-${slotEnemy}`).src = enemyElite.img;
    enemLvl.textContent =
      Math.trunc(Math.random() * (enemyElite.lvl + minutes)) + 1;
    document.getElementById(`hp-${slotEnemy}`).textContent =
      enemyElite.hp * enemLvl.textContent;
    document.getElementById(`arm-${slotEnemy}`).textContent =
      enemyElite.armor * enemLvl.textContent;
    document.getElementById(`weapon-${slotEnemy}`).textContent =
      enemyElite.weapon * enemLvl.textContent;
    document.querySelector(`.e-${slotEnemy}`).style.background = "#8D900C";
    attackSpeedSlot[slotEnemy] = enemyElite.attSpeed;
    setTimeout(`slot_${slotEnemy}()`, 1000);
    eliteSlot[slotEnemy] = 1;
  } else {
    document.querySelector(`.eImage-${slotEnemy}`).src = enemy.img;
    enemLvl.textContent = Math.trunc(Math.random() * (enemy.lvl + minutes)) + 1;
    document.getElementById(`hp-${slotEnemy}`).textContent =
      enemy.hp * enemLvl.textContent;
    document.getElementById(`arm-${slotEnemy}`).textContent =
      enemy.armor * enemLvl.textContent;
    document.getElementById(`weapon-${slotEnemy}`).textContent =
      enemy.weapon * enemLvl.textContent;
    attackSpeedSlot[slotEnemy] = enemy.attSpeed;
    setTimeout(`slot_${slotEnemy}()`, 1000);
  }
};

let respawn = setInterval(callEnemy, 6500);

const dmgEnemNormal = function (x, y) {
  currHP -= y.textContent;
  hp.textContent = currHP;
  x.style.background = "#CD1515";
  setTimeout(function () {
    x.style.background = "#000000";
  }, 500);
};

const dmgEnemNormalElite = function (x, y) {
  currHP -= y.textContent;
  hp.textContent = currHP;
  x.style.background = "#CD1515";
  setTimeout(function () {
    x.style.background = "#8D900C";
  }, 500);
};

const dmgEnem1 = function (x) {
  currHP--;
  hp.textContent = currHP;
  x.style.background = "#6A6A6A";
  setTimeout(function () {
    x.style.background = "#000000";
  }, 500);
};

const dmgEnem1Elite = function (x) {
  currHP--;
  hp.textContent = currHP;
  x.style.background = "#6A6A6A";
  setTimeout(function () {
    x.style.background = "#8D900C";
  }, 500);
};

const counterAttack = function (x) {
  const enemHP = document.getElementById(`hp-${x}`);
  const enemArm = document.getElementById(`arm-${x}`);
  const enemyAtt = document.getElementById(`weapon-${x}`);
  if (enemHP.textContent > 0) {
    if (currDmg / 2 - enemArm.textContent > 0) {
      enemHP.textContent -= Math.round(currDmg / 2) - enemArm.textContent;
      if (enemHP.textContent <= 0) {
        attack(x, currDmg);
      }
    }
  }
};

const enemyDmg1 = function () {
  const enemyAtt = document.getElementById(`weapon-1`);
  const bg = document.querySelector(".e-1");
  const playHP = document.getElementById("hp");
  if (document.querySelector(`.eImage-1`).src) {
    if (eliteSlot[1] === 0) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormal(bg, enemyAtt);
        counterAttack(1);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem1(bg);
        counterAttack(1);
      } else {
        gameOver();
      }
    } else if (eliteSlot[1] === 1) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormalElite(bg, enemyAtt);
        counterAttack(1);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem1Elite(bg);
        counterAttack(1);
      } else {
        gameOver();
      }
    }
  }
};

const enemyDmg2 = function () {
  const enemyAtt = document.getElementById(`weapon-2`);
  const bg = document.querySelector(".e-2");
  const playHP = document.getElementById("hp");
  if (document.querySelector(`.eImage-2`).src) {
    if (eliteSlot[2] === 0) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormal(bg, enemyAtt);
        counterAttack(2);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem2(bg);
        counterAttack(2);
      } else {
        gameOver();
      }
    } else if (eliteSlot[2] === 1) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormalElite(bg, enemyAtt);
        counterAttack(2);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem1Elite(bg);
        counterAttack(2);
      } else {
        gameOver();
      }
    }
  }
};

const enemyDmg3 = function () {
  const enemyAtt = document.getElementById(`weapon-3`);
  const bg = document.querySelector(".e-3");
  const playHP = document.getElementById("hp");
  if (document.querySelector(`.eImage-3`).src) {
    if (eliteSlot[3] === 0) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormal(bg, enemyAtt);
        counterAttack(3);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem1(bg);
        counterAttack(3);
      } else {
        gameOver();
      }
    } else if (eliteSlot[3] === 1) {
      if (enemyAtt.textContent - currArmor > 0 && playHP.textContent > 0) {
        dmgEnemNormalElite(bg, enemyAtt);
        counterAttack(3);
      } else if (
        enemyAtt.textContent - currArmor <= 0 &&
        playHP.textContent > 0
      ) {
        dmgEnem1Elite(bg);
        counterAttack(3);
      } else {
        gameOver();
      }
    }
  }
};

let enemTime_1;
let enemTime_2;
let enemTime_3;

const slot_1 = function () {
  enemTime_1 = setInterval(enemyDmg1, attackSpeedSlot[1]);
};

const slot_2 = function () {
  enemTime_2 = setInterval(enemyDmg2, attackSpeedSlot[2]);
};

const slot_3 = function () {
  enemTime_3 = setInterval(enemyDmg3, attackSpeedSlot[3]);
};

//combat player

const attack = function (x, y) {
  y -= document.getElementById(`arm-${x}`).textContent;
  const hit = document.getElementById(`hp-${x}`);
  const lvl = document.getElementById(`lvl-${x}`);
  const bg = document.querySelector(`.e-${x}`);
  if (y > 0) {
    hit.textContent -= y;
    if (hit.textContent <= 0) {
      hit.textContent = 0;
      bg.style.background = "#000000";
      if (eliteSlot[x] === 0) {
        currGold += Math.trunc(Math.random() * (lvl.textContent * 2)) + 1;
        gold.textContent = currGold;
        currXP += Math.trunc(Math.random() * (lvl.textContent * 2)) + 1;
        xp.textContent = currXP;
        document.querySelector(`.eImage-${x}`).removeAttribute("src");
      } else {
        currGold += (Math.trunc(Math.random() * (lvl.textContent * 2)) + 1) * 2;
        gold.textContent = currGold;
        currXP += (Math.trunc(Math.random() * (lvl.textContent * 2)) + 1) * 2;
        xp.textContent = currXP;
        document.querySelector(`.eImage-${x}`).removeAttribute("src");
        eliteSlot[x] = 0;
      }
      attackSpeedSlot[x] = 0;
      addScore(Number(lvl.textContent));
      if (x === 1) {
        clearInterval(enemTime_1);
        enemTime_1 = null;
      } else if (x === 2) {
        clearInterval(enemTime_2);
        enemTime_2 = null;
      } else if (x === 3) {
        clearInterval(enemTime_3);
        enemTime_3 = null;
      }
    }
  }
};

const life1 = document.getElementById(`hp-1`);
const life2 = document.getElementById(`hp-2`);
const life3 = document.getElementById(`hp-3`);

eLAtt.addEventListener("click", function () {
  if (document.querySelector(`.eImage-1`).src) {
    if (life1.textContent > 0) {
      attack(1, currDmg);
    }
  }
});

eCAtt.addEventListener("click", function () {
  if (document.querySelector(`.eImage-2`).src) {
    if (life2.textContent > 0) {
      attack(2, currDmg);
    }
  }
});

eRAtt.addEventListener("click", function () {
  if (document.querySelector(`.eImage-3`).src) {
    if (life3.textContent > 0) {
      attack(3, currDmg);
    }
  }
});

eLSpl.addEventListener("click", function () {
  if (document.querySelector(`.eImage-1`).src) {
    if (life1.textContent > 0 && currMana > 8 - currInt) {
      attack(1, currDmgSpell);
      if (life2.textContent > 0) {
        attack(2, currDmgSpell);
      }
      costMana();
    }
  } else {
    enemDie(1);
    if (life2.textContent <= 0) {
      enemDie(2);
    }
  }
});

eCSpl.addEventListener("click", function () {
  if (document.querySelector(`.eImage-2`).src) {
    if (life2.textContent > 0 && currMana > 8 - currInt) {
      attack(2, currDmgSpell);
      if (life1.textContent > 0) {
        attack(1, currDmgSpell);
      }
      if (life3.textContent > 0) {
        attack(3, currDmgSpell);
      }
      costMana();
    }
  } else {
    enemDie(2);
    if (life1.textContent <= 0) {
      enemDie(1);
    }
    if (life3.textContent <= 0) {
      enemDie(3);
    }
  }
});

eRSpl.addEventListener("click", function () {
  if (document.querySelector(`.eImage-3`).src) {
    if (life3.textContent > 0 && currMana > 8 - currInt) {
      attack(3, currDmgSpell);
      if (life2.textContent > 0) {
        attack(2, currDmgSpell);
      }
      costMana();
    }
  } else {
    enemDie(3);
    if (life2.textContent <= 0) {
      enemDie(2);
    }
  }
});

//top buttons
const btnCredits = document.getElementById("credits");
const btnTutorial = document.getElementById("tutorial");
const credits = document.querySelector(".cText");
const htpText = document.querySelector(".htpText");

const button = function (x) {
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
};

btnCredits.addEventListener("click", function () {
  button(credits);
});
btnTutorial.addEventListener("click", function () {
  button(htpText);
});

const gameOver = function () {
  document.querySelector(".gameOver").classList.remove("hidden");
  clearInterval(timeNow);
};
