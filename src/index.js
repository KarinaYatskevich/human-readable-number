var th = ['hundred','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function getLastDigitFromNumber(number){ 
    const numberText = number.toString(); 
    const lastDigit = Number(numberText[numberText.length - 1]) 
    return lastDigit
}
function getThirdDigitFromNumber(number){
    const numberText = number.toString(); 
    const thirdDigit = Number(numberText[numberText.length - 1]) 
    return thirdDigit
}

module.exports = function toReadable (number) {
    if (number < 10){
        const lastDigit = getLastDigitFromNumber(number)
        const lastDigitName = dg[lastDigit]
        return lastDigitName
    }
    else if (10 < number < 20){
        const thirdDigit = getThirdDigitFromNumber(number) 
        const thirdDigitName = tn[thirdDigit]
        return thirdDigitName
    }
}
