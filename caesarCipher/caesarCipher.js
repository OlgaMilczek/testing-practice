const numOfA = 'A'.charCodeAt();
const numOfZ = 'Z'.charCodeAt();

const numOfa = 'a'.charCodeAt();
const numOfz = 'z'.charCodeAt();

let alphabetSize = numOfZ - numOfA + 1;

const cycleShift = function(character, shift, minimum, maximum) {
    const alphabetSize = maximum - minimum + 1;

    character += shift;
    if (character < minimum)
        return character + alphabetSize;
    else if (character > maximum)
        return character - alphabetSize;
    else
        return character;
}

function shiftedSymbol(symbol, shift) {
    let symbolCode = symbol.charCodeAt();

    let newSymbolCode = symbolCode;

    if (symbolCode >=numOfA && symbolCode<= numOfZ) {
        newSymbolCode = cycleShift(symbolCode, shift, numOfA, numOfZ)
        
    } else if (symbolCode >=numOfa && symbolCode<= numOfz) {
        newSymbolCode = cycleShift(symbolCode, shift, numOfa, numOfz)
    }
    return String.fromCharCode(newSymbolCode)
}

function caesarCipher(string, shift) {
    let ciphered = '';

    let newShift = shift % alphabetSize;

    for (let i = 0; i < string.length; i ++) {
        ciphered += shiftedSymbol(string[i], newShift);
    }
    return ciphered

}

module.exports = caesarCipher;