var th = ['hundred','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function getDigitFromNumber(number, index){ 
    const numberText = number.toString(); 
    const lastDigit = Number(numberText[index]) 
    return lastDigit
}

function getDoubleFigures(number){
    const firstDigit = getDigitFromNumber(number, 0) 
    const secondDigit = getDigitFromNumber(number, 1) 
    const firstDigitText = tw[firstDigit - 2];
    console.log(firstDigitText)
    const secondDigitText = secondDigit === 0 ? undefined : dg[secondDigit];

    const text = secondDigitText === undefined ? firstDigitText : `${firstDigitText} ${secondDigitText}`;

    return text
}


function gg2(number){
    const firstDigit = getDigitFromNumber(number, 0) 
    const firstDigitText = firstDigit === 0 ? undefined : dg[firstDigit];
    if (100 < number < 120){
        const lastDigitName = dg[number];
        console.log(lastDigitName)
        return firstDigitText + 'hundreed' + lastDigitName;
    } else if (120 < number < 1000) {
        const a =  getDoubleFigures(number)
        console.log(a)
        return  `${firstDigitText} hundreed ${a}`
    }
}
module.exports = function toReadable (number) {
    if (number < 20){
        const lastDigitName = dg[number];
        return lastDigitName;
    } else if (number < 100) {
        return getDoubleFigures(number)
    }
    else if (100 < number < 1000){
        return gg2()
    }
}
