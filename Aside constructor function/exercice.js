const hotel1 = {
  name: "Safari View",
  rooms: 30,
  stars: "⭐⭐⭐⭐⭐",
  costPerNightAdult: 240,
  costPerNightChild: 180,
};

const hotel2 = {
  name: "Leopard Mansion",
  rooms: 96,
  stars: "⭐⭐⭐",
  costPerNightAdult: 120,
  costPerNightChild: 180,
};

// Constructor function
function NationalParkHotels(data) {
  this.name = data.name;
  this.rooms = data.rooms;
  this.stars = data.stars;
  this.costPerNightAdult = data.costPerNightAdult;
  this.costPerNightChild = data.costPerNightChild;
  this.summariseHotel = () => {
    console.log(`A night one stay 
    at the ${this.name} for two adults and two children cost a
    total of ${this.costPerNightAdult * 2 + this.costPerNightChild * 2}`);
  };
}

const safariView = new NationalParkHotels(hotel1);
const leopardMansion = new NationalParkHotels(hotel2);

safariView.summariseHotel();
leopardMansion.summariseHotel();
