const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  //сравниваем сумму двух заданных чисел с 50, если сумма больше 50, то переменная Бонус = 50, иначе переменная Бонус = сумме этих чисел
  sum > 50 ? (bonus = 50) : (bonus = sum);
  //возвращаем вычесленную переменную Бонус
  return bonus;
};

calculateBonus(2, 5);

module.exports = calculateBonus;
