
function lonelyinteger(a) {
    // Write your code here
    const arr = new Map();
    a.map(elem => (arr.has(`${elem}`))? arr.set(`${elem}`, arr.get(`${elem}`) + 1) : arr.set(`${elem}`, 1));
    // validate numbers
    let value = null;
    for (let i = 0; i < a.length; i++) {
        if (arr.get(`${a[i]}`) === 1) {
            value = a[i]
            break
        }
    }
    return value
}