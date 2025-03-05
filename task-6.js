let input;
let total = 0;

do {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  let number = Number(input);
  total += number;
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);
