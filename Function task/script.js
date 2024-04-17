
//print odd number in an array
var oddNumber = function(){
    var noArray = [1,2,3,4,5,6,7,8,9,10];
    return noArray.filter(element => element % 2 !== 0)
   
}

console.log(oddNumber());

//Convert all the strings to title caps in a string array

var stringArray = ["hello world", "good morning", "have a nice day"];

var capsLetter = function(string){
    var result = string.map((str)=>{
        return str.toLowerCase().split(" ").map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ")
    })
    return result;
}
var letResult = capsLetter(stringArray);
console.log(letResult);

//Sum of all numbers in an array

var noArray = [1,2,3,4,5,6,7,8,9,10];

var sumArray= function(arr){
    let num=0;
    for(let i =0;i<arr.length;i++){
       num = arr[i]+num;
       
    }
    return num
    
}
const sumresult =sumArray(noArray);
console.log(sumresult);

//rotate an array by k times

var RotatedArray = function (arr,k){
    var rem = k%arr.length;
    var roarr= arr.slice(rem).concat(arr.slice(0,rem));
    return roarr;
}
var rotate = RotatedArray(noArray, 3)
console.log(rotate);

//remove duplicate from an array
const duplicateArray=[0,1,2,3,3,3,4,5]
let removeDuplicates = function(arr) {

    const uniqueSet = new Set(arr);
   
    const uniqueArray = Array.from(uniqueSet);   
     return console.log(uniqueArray);
}
removeDuplicates(duplicateArray);

//Return median of two sorted arrays of the same size.

let findMedian = function(arr1, arr2) {
    let combinedArray = Array.from(arr1).concat(arr2).sort((a, b) => a - b);
    
    if (combinedArray.length % 2 === 0) {
        let n = combinedArray.length / 2;
        return (combinedArray[n - 1] + combinedArray[n]) / 2;
    } else {
        const mid = Math.floor(combinedArray.length / 2);
        return combinedArray[mid];
    }
}

// Example
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
let result = findMedian(arr1, arr2);
console.log(result);

//Return all the palindromes in an array
const arr = ["madam", "hello", "level", "racecar", "apple", "noon"];

let findPalindrom = function(arr){
    return arr.filter((ele)=>{
        let reverse = ele.split("").reverse().join("");
        return ele === reverse

    })
}
let result1 = findPalindrom(arr);
console.log(result1);

//find prime number in given array 

const isPrime = function(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

const findPrimeNumbers = arr => arr.filter(num => isPrime(num));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers);

//// arrow function ------------------------------------------------------

//Print odd numbers in an array

let oddnumber = [];
 let printOddNumber=(arr)=>{
   arr.map((ele,ind)=>{
           if(ele %2 !== 0 ){
              oddnumber.push(ele);
            }
    })

 }

printOddNumber(numbers);
console.log(oddnumber);

// Convert all the strings to title caps in a string array

const titleCapsArray = stringArray => stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

const stringArray1 = ["hello", "world", "javascript", "example"];
const titleCaps = titleCapsArray(stringArray1);
console.log(titleCaps);

//Sum of all numbers in an array
let num =0;
let addAllNumber=(arr)=>{
    arr.forEach(ele => {
        num = ele +num;
    });

}
addAllNumber(numbers);
console.log(num);

//find prime number in given array 

const isPrime2 = (num)=> {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

const findPrimeNumbers2 = (arr) => arr.filter(num => isPrime(num));

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers2 = findPrimeNumbers2(numbers);
console.log(primeNumbers2);

//Return all the palindromes in an array
const palindromeArray = ["radar", "level", "deified", "stats", "madam", "refer"];

let findPalindromArrow = function(arr){
    return arr.filter((ele)=>{
        let reverse = ele.split("").reverse().join("");
        return ele === reverse

    })
}
let resultArrow = findPalindromArrow(palindromeArray);
console.log(resultArrow);
