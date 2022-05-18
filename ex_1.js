///1. 수열의 최소값 위치 찾기
//  수열이 주어질 때 ,이 수열의 있는 수 중 최솟값의 위치를 모두 출력하는 프로그램을 작성해주세요.
// 입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최솟값의 위치를 배열로 반환합니다.
// 모든 수는 100 이하의 자연수로 입력 받습니다.

// 예시)
// [5, 2, 10, 2]의 배열을 받았을 때 출력값은 [1, 3]이다.

// input값)
// let input = [ [5, 2, 10, 2], [4, 5, 7, 4, 8], [12, 11, 11, 16, 11, 12] ]

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

// 체스판과 체스 기물이 완전히 한 세트를 이루지 않고 있다.
// 게임을 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 작성하라.
// 기물의 개수는 배열 형태로 king부터 pawns 순으로 들어오며
// 한 게임을 위해 필요한 기물의 개수는 다음과 같다.
// * 순서 및 기물 필요 개수: king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)
// 입력)
// [0, 1, 2, 2, 2, 7], [2, 1, 2, 1, 2, 1], [0, 1, 1, 5, 3, 6],
// 결과)
// [ 1, 0, 0, 0, 0, 1 ] [ -1, 0, 0, 1, 0, 7 ] [ 1, 0, 1, -3, -1, 2 ]

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
 
 
<<<<<<< HEAD
 console.log(chessPiece(piece1)); //[ 1, 0, 0, 0, 0, 1 ]
 console.log(chessPiece(piece2)); //[ -1, 0, 0, 1, 0, 7 ] 
 console.log(chessPiece(piece3)); //[ 1, 0, 1, -3, -1, 2 ]
=======
 console.log(chessPiece(piece11)); //[ 1, 0, 0, 0, 0, 1 ]
 console.log(chessPiece(piece12)); //[ -1, 0, 0, 1, 0, 7 ] 
 console.log(chessPiece(piece13)); //[ 1, 0, 1, -3, -1, 2 ]
>>>>>>> main




///3. 두 수 최대 합

// 수열이 주어질 때, 두 개의 수를 선택하여 최대 합이 나올 수 있는 프로그램을 제작하시오.
// 입력은 정수로 된 배열을 받고, 최대 합이 나올 수 있는 두 수를 배열 형태로 반환한다.
// 배열로 입력되는 정수는 10 ~ 20개 사이이며, 범위는 -20 ~ +20 사이의 값이 입력된다.
// 입력)
// [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9], [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19], [-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14]
// 결과)
// [ 18, 17 ] [ 19, 14 ] [ 19, 15 ]

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











