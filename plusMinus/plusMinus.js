const printEmpty = 0.000000
function plusMinus(arr) {
    let cP = 0;
    let cN = 0;
    let cC = 0;
    arr.map(n => {
        if (n < 0) cN++
        if (n > 0) cP++
        if (n === 0) cC++
    })
    const length = arr.length;
    console.log((cP > 0) ? (cP/length).toFixed(6) : printEmpty);
    console.log((cN > 0) ? (cN/length).toFixed(6) : printEmpty);
    console.log((cC > 0) ? (cC/length).toFixed(6) : printEmpty);
    return (cN > 0) ? (cN/length).toFixed(6) : printEmpty
}

module.exports = plusMinus