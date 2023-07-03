const sandraKayeProfileData = {
  name: "Sandra Kaye",
  portfolio: "www.sandrasportfolio.com",
  currentJob: "Google",
  currentSalary: "400k",
};

// Object.assign(target, source)

function DevProfile(data) {
  Object.assign(this, data);
  this.summariseDev = () => {
    console.log(`${this.name}'s portfolio is at ${this.portfolio} and she work at ${this.currentJob}.
    Her current salary is ${this.currentSalary}.
    `);
  };

  this.summariseStudent = () => {};
}

const sandraKaye = new DevProfile(sandraKayeProfileData);
sandraKaye.summariseDev();
