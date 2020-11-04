 // Creare un array di nomi e chiedere all’utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall’utente.


$(document).ready(function() {

  const firstArray = ['Luca', 'Paolo', 'Francesca', 'Claudio', 'Claudia', 'Giulia', 'Monica',
  'Lorella', 'Cinzia', 'Renato', 'Fabio', 'Stefano', 'Mario', 'Marco'];

  let firstNumber = parseInt(prompt('Inserisci un numero da 1 a 14'));
  let secondNumber = parseInt(prompt('Inserisci un numero da 1 a 14'));

  const secondArray = firstArray.filter((element, index) => {

    if ((index + 1)  >= firstNumber && index <= secondNumber) {

      return element
    }

  });

  console.log(secondArray);


});
