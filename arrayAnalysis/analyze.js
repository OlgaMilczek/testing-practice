const roundTo = (num, precision) => {
    return Math.round(num *  Math.pow(10, precision)) / Math.pow(10, precision);
}

const findAverage = (array) => {
    const sum = array.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    return roundTo(sum/array.length, 1);
}

const findMin = (array) => {
    let min = array[0]
    for (element of array) {
        if (element < min) {
            min = element
        }
    }
    return min;
}

const findMax = (array) => {
    let max = array[0]
    for (element of array) {
        if (element > max) {
            max = element
        }
    }
    return max;
}

const analyze = (array) => {
    if (array.length === 0) {
        return {
            average: 0,
            min: 0,
            max: 0,
            length: array.length,
        }
    }
    return {
        average: findAverage(array),
        min: findMin(array),
        max: findMax(array),
        length: array.length,
      }
}

module.exports = analyze;