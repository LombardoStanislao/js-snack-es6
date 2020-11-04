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


  const secondArray  = firstArray.map((element, index)) => {

    element.position = 
  }

});
