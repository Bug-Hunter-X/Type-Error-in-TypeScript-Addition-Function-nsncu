function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b;
  }
}

const result1 = add(1, 2); // Correct: 3
const result2 = addSafe(1, "2"); // Correct: 3
const result3 = addSafe(1,2); //Correct: 3