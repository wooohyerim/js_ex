///1. 수열의 최소값 위치 찾기
const array1 = [5, 2, 10, 2]; 
const array2 = [4, 5, 7, 4, 8];
const array3 = [12, 11, 11, 16, 11, 12];

function minNum(arr){
    temp = [];
    let min = Math.min(...arr);
  for(let i=0; i<arr.length; i++){
    if(arr[i]==min){
      temp.push(i);
    }
  }
  return temp;
}

console.log(minNum(array1)); //[1,3]
console.log(minNum(array2)); //[0,3]
console.log(minNum(array3)); //[1,2,4]



///2. 체스세트
const piece1 = [0, 1, 2, 2, 2, 7];
const piece2 = [2, 1, 2, 1, 2, 1];
const piece3 = [0, 1, 1, 5, 3, 6];

const chess = [1, 1, 2, 2, 2, 8];

function chessPiece(arr){
    let result = [];
    for(let i in arr){
      result[i] = chess[i] - arr[i];
  }
    return result;
  }
 
 
 console.log(chessPiece(arr1)); //[ 1, 0, 0, 0, 0, 1 ]
 console.log(chessPiece(arr2)); //[ -1, 0, 0, 1, 0, 7 ] 
 console.log(chessPiece(arr3)); //[ 1, 0, 1, -3, -1, 2 ]




///3. 두 수 최대 합

const arr1 = [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9];
const arr2 = [3, 7, -14, 2, -6, 13, -20, -2,
              -7, 6, -17,-5, 14, -9, 19];
const arr3 = [-15, -4, -8, 12, 12, -8, -8, 9, 
              10, 15, -2, 10, -14, 2, 13, 19, 
              -9, 3, -18, 14];

function maxSum(array){
let temp =array.sort((a, b) => b - a); // 내림차순);
     return [temp[0],temp[1]]; 
 }

console.log(maxSum(arr1)); //[18,17]
console.log(maxSum(arr2)); //[19,14]
console.log(maxSum(arr3)); //[19,15]











