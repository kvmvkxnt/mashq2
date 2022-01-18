var exp = [5, 7, 8, 16];

function numberSum(numbers) {
    var counter = 0;

    for (var i = 0; i < numbers.length; i++) {
        counter += exp[i];
    }

    return counter;
}

console.log(numberSum(exp));