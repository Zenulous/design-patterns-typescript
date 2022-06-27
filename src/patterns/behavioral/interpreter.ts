// Interpreter
// Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

// Technically an interpreter, but this example is so barebones, it could use some work ;)
function AutomatedTrainingProgram(desiredResult: string) {
  const program = [];
  if (desiredResult.includes("muscles") || desiredResult.includes("chest")) {
    program.push("Bench press");
    program.push("Incline dumbell press");
    program.push("Pectoral");
  }
  return program;
}

console.log(AutomatedTrainingProgram("I want to train muscles"));
