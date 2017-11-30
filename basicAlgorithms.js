/*
     1. Print all the integers from 1 to 255.
   */
function printOneto255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
// printing 1- 255
printOneto255();
/*
  2. Print all odd integers from 1 to 255.
*/
function printOdds() {
    console.log("Printing odds ");
    for (var i = 1; i < 256; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
printOdds();
/*
  3. Print integers from 0 to 255, and with each integer print the sum so far.
*/
function printIntsandSums() {
    console.log("Printing integers and theirs sums");
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum = sum + i;
        console.log("Integer : " + i + " Sum : " + sum);
    }
}
printIntsandSums();
/*
  4. Iterate through a given array, printing each value.
*/
function printArraysValues() {
    var arr = [1, 2, 3, 5, 7, 9];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArraysValues();
/*
  5. Given an array, find and print its largest element.
*/
function findMax() {
    var max = 0;
    var arr = [1, 2, 3, 5, 7, 9];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
/*
  6. Analyze an array’s values and print the average.
*/
function findAvg() {
    var avg = 0;
    var arr = [1, 2, 3, 5, 7, 9];
    for (var i = 0; i < arr.length; i++) {
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    console.log(avg);
}
/*
  7. Create an array with all the odd integers between 1 and 255 (inclusive).
*/
function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}
/*
  8. Square each value in a given array, returning that same array with changed values.
*/
function squareVal() {
    var arr = [1, 2, 3, 5, 7, 9];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
/*9. Given an array and a value Y, count and print the number of array values greater than Y.*/
function greaterY() {
    var arr = [1, 2, 3, 5, 7, 9];
    var Y = 3
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
/* 10. Return the given array after setting any negative values to zero.*/
function noNeg() {
    var arr = [1, -2, 3, 5, -7, 9];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
/* 11.Given an array, print the max, min and average values for that array.*/
function maxMinAvg() {
    var arr = [1, 2, 3, 5, 7, 9];
    var arrnew = [];
    var max = 0;
    var min = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew;
}
/* 12.Given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end.*/
function swap(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}
/*13.Given an array of numbers, replace any negative values with the string 'Dojo'.*/
function replace(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}