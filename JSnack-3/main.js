 // A partire da un array di oggetti, creare una copia dell’array e aggiungere ai singoli elementi dell’array una nuova proprietà “position” che contiene una lettera casuale.


$(document).ready(function() {


  const firstArray = [

    {
      type: 'car',
      model: 'i20',
      brand: 'Hyundai'
    },

    {
      type: 'car',
      model: 'rio',
      brand: 'Kia'
    },

    {
      type: 'car',
      model: 'panda',
      brand: 'Fiat'
    },

    {
      type: 'car',
      model: '500',
      brand: 'Fiat'
    },

    {
      type: 'car',
      model: 'Model X',
      brand: 'Tesla'
    },
  ]



  const getRndInteger =  (min, max) =>  {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };


  const randomLetter = () => {
    let alfabeto = 'abcdefghijklmnopqrtuvwxyz';
    let posizione = getRndInteger(0, 25);
    let letteraCasuale = alfabeto.charAt(posizione);
    return letteraCasuale
  };



  const secondArray  = firstArray.map((element) => {

    element.position = randomLetter();

    return element;

  });

  console.log(secondArray);

});
