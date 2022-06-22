const array = [1, 3];
console.log(array.map((array) => array * 3));

const ps5 = {
    valor: 4500,
}

function mapPs5 (array, obj) {
    return array.map(function(arr) {
        return this.valor / arr;
    }, obj);
}

console.log(mapPs5(array, ps5));