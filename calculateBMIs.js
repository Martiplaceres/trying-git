const patients = require("./patients");
const gender = "m";

const bmis = patients.map(function (patient) {
  if (patient.gender === "m") {
    return 10 * patient.weight + 6.25 * patient.height - 5 * patient.age + 50;
  } else {
    return 10 * patient.weight + 6.25 * patient.height - 5 * patient.age - 150;
  }
});

// calculate BMI for a patient here

// return BMI for a patient here

console.log(bmis);
