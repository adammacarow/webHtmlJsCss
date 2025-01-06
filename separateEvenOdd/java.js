function segi3kanan(baris) {
    for (let i = baris; i <= 10; i++) {
      console.log('*'.repeat(i));
      //console.log('@'.repeat(i * 2 - 1));
    }
  }
  
  // Contoh penggunaan:
  segi3kanan(5);
  /*
  Output:
  *
  **
  ***
  ****
  *****
  */
    

  function drawIsoscelesTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      const spaces = ' '.repeat(rows - i);
      const stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  // Contoh penggunaan:
  drawIsoscelesTriangle(5);
  /*
  Output:
      *
     ***
    *****
   *******
  *********
  */
  function drawInvertedTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
      console.log('*'.repeat(i));
    }
  }
  
  // Contoh penggunaan:
  drawInvertedTriangle(5);
  /*
  Output:
  *****
  ****
  ***
  **
  *
  */
function sT(rows) {
  for (let i = rows; i >= 1; i--) {
    const spaces = '#'.repeat(rows - i);
    const stars = '*'.repeat(2 * i - 1);
    const bintang = '#'.repeat(rows - i);
    document.writeln("<br>");
    document.writeln(spaces + stars + bintang)// + stars + bintang);
  }
}

// Contoh penggunaan:
sT(5);
/*
Output:
*********
 *******
  *****
   ***
    *
*/
{

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
}