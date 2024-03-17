// 1. write a program to print all the ecen numbers in an array
const arr = [1,2,4,6,2,8,9,17,13,23,34,35]

for (let age in arr){
  if(!(arr[age] & 1)){
    console.log(age)
  }
}