function miniMaxSum (arr) {
    // advance
    let sum = arr.reduce((a, b) => {
        return a + b;
    });
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    console.log(min + " " + max);
    // junior solution
    const result = [];
    for (let i = 0; i < 5; i++) {
        let arrMinus = [...arr];
        arrMinus.splice(i, 1)
        let sum = 0;
        arrMinus.map((elem) => sum = sum + elem)
        result.push(sum);
    }
    let bigger = result[0];
    let lower = result[0]
    result.map(elem => { 
        if (elem > bigger) { bigger = elem }
        if (elem < lower) { lower = elem }
    })
    console.log(`${lower} ${bigger}`);
}
module.exports = miniMaxSum