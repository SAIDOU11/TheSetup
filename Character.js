import { getDicePlaceholderHtml, getDiceRollArray } from "./utils.js";

const getPercentage = (remainingHealth, maximumHealth) => {
  return (100 * remainingHealth) / maximumHealth;
};

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.maxHealth = this.health;

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth);
    console.log(percent);
    return `
    <div class="health-bar-outer">
    <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
        style="width: ${percent}%;">
    </div>
</div>`;
  };

  this.takeDamage = (attackScoreArray) => {
    const totalAttackScore = attackScoreArray.reduce(
      (total, currentNum) => total + currentNum
    );

    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  this.getCharacterHtml = () => {
    const { name, avatar, health, diceArray } = this;
    const healthBar = this.getHealthBarHtml();

    return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
            <div class="dice-container">
                    ${diceArray}
            </div>
            </div>`;
  };
}

export default Character;
