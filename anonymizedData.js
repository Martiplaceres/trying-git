const patients = require("./patients");
console.log(patients);

// map executes a callback for each element in the array
const holaMartina = patients.map(function (patient) {
  // return an object with id and age, it gets added to the output array
  return {
    id: patient.id,
    gender: patient.gender,
    height: patient.height,
    weight: patient.weight,
    dailyExercise: patient.dailyExercise,
    age: patient.age,
  };
});

console.log(holaMartina);
console.log("hola Martina");
