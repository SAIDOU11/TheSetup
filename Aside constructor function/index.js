const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-22",
};

const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-22",
};

// Constructor function
function Animal(data) {
  this.species = data.species;
  this.name = data.name;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;
  this.summariseAnimal = () => {
    console.log(
      `${this.name} is a ${this.age} year old 
      ${this.species} which weighs ${this.weightKg}kg and was 
      released into the wild on ${this.dateOfRelease}`
    );
  };
}

const tillyTheTiger = new Animal(animalForRelease1);
const nellyTheElephant = new Animal(animalForRelease2);

tillyTheTiger.summariseAnimal();
nellyTheElephant.summariseAnimal();
