function add(a, b) {
    return Number(a)+ Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function divide(a, b) {
    if (Number(b) === 0) {
        throw new Error("Can't divide by 0");
    } else {
        return Number(a) / Number(b)
    }
}

function multiply(a, b) {
    return Number(a) * Number(b)
}

module.exports = {add, subtract, divide, multiply};