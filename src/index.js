module.exports = function toReadable(number) {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    let answ = 0;
    let dozens = 0;
    if(number === 0){
      return 'zero';
    }
    if(number < 20){
      return ones[number];
    }
    if(number < 100){
      answ = Math.floor(number/10);
      return (tens[answ] + " " + ones[number % 10]).trim();
    }
    answ = Math.floor(number / 100);
    dozens = Math.floor(number % 100);
    if(dozens >= 20){
      return (ones[answ] + ' hundred ' + tens[Math.floor(dozens/10)] + " " + ones[dozens % 10]).trim();
    }
    else{
      return (ones[answ] + ' hundred ' + ones[dozens]).trim();
    }
    
  };