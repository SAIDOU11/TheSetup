import Character from "./Character.js";
import characterData from "./data.js";

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  if (orc.dead || wizard.dead) {
    endGame();
  }
  render();
}

function endGame() {
  const endMessage =
    orc.health === 0 && wizard.health === 0
      ? "No victors - all creatures are dead"
      : orc.health === 0
      ? "The Wizard wins"
      : "The Orc is victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  document.body.innerHTML = `
  <div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`;
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
