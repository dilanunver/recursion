function countdown(n) {
  if (n < 1) {
    return [];
  } else {

    const arr = countdown(n - 1);
    console.log(arr)
    arr.unshift(n);
    console.log(arr)
    return arr;
  }
}
console.log(countdown(10))

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    console.log(startNum)
    return [startNum]
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    console.log(numbers)
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5))
