import Character from "./Character.js";
import characterData from "./data.js";

let monstersArray = ["orc", "demon", "goblin"];

let isWaiting = false;

const getNewMonster = () => {
  const nextMonster = characterData[monstersArray.shift()];
  // characterData[orc]
  return monstersArray ? new Character(nextMonster) : {};
};

function attack() {
  if (!isWaiting) {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    monster;
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1500);
      } else {
        endGame();
      }
    }
  }
}

function endGame() {
  isWaiting = true;
  const endMessage =
    monster.health === 0 && wizard.health === 0
      ? "No victors - all creatures are dead"
      : monster.health === 0
      ? "The Wizard wins"
      : "The Monster are victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  setTimeout(() => {
    document.body.innerHTML = `
  <div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`;
  }, 1500);
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
