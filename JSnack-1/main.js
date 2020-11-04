 // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// Creo un array di bici


$(document).ready(function() {

  const bikesArray = [

    {
      name: 'Bikeriders',
      weight: 4
    },

    {
      name: 'BikeStorms',
      weight: 6
    },

    {
      name: 'Leafbike',
      weight: 2.7
    },

    {
      name: 'BikerMice',
      weight: 5
    },

    {
      name: 'Bianchi',
      weight: 3.8
    },

    {
      name: 'Nilox',
      weight: 8
    },

  ];

  let lightWeight = bikesArray[0].weight;

  let lightBike;

  console.log(lightWeight);

  bikesArray.forEach((element) => {

    let {weight} = element;

    console.log(weight);

    if (weight < lightWeight) {

      lightWeight = weight;

      lightBike = element;

    }

  });

  $('#light-bike').append(lightBike.name + ' e pesa: ' + lightWeight + 'Kg');

  console.log('La bici più leggera è: ' + lightBike.name + ' e pesa: ' + lightWeight + 'Kg');


});
