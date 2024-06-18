const cardNumber = '2012 4434 1121 2342'; // This is the user input
const lastDigits = cardNumber.slice(-4);

const maskedNumber = lastDigits.padStart(cardNumber.length, '*');
console.log(maskedNumber); // Outputs: "************2342"

const itemIkea = '123234234324';
const itemIkeaPadded = itemIkea.padStart(16, 'Ikea'); // Outputs 'Ikea123234234324'
const itemJysk = '15434324';
const itemJyskPadded = itemJysk.padStart(16, 'Jysk****'); // Outputs 'Jysk****15434324'
