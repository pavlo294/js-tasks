let credits = 23580;
const pricePerDroid = 3000;
let input = prompt('Скільки дроїдів ви хочете купити?');

if (input === null) {
  console.log('Скасовано користувачем!');
} else {
  const totalPrice = input * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
  } else {
    credits -= totalPrice;
    console.log(
      `Ви купили ${input} дроїдів, на рахунку залишилося ${credits} кредитів.`,
    );
  }
}
