// let arr=[1,2,3,4]
//  let add = (input)=>{
//   let sum =0
//   for (i of input){
//     sum=sum+i  
//   }
//   return sum
//  }

// console.log(add(arr));


// let arr=[1,2,3,"4","5"]
//       let result =arr.filter((string)=>{
//           return string
          
//       })
//       console.log(result);


// let array =[1,4,9,16,25]
// let squareRoot =(arr)=>{
//  let result=[]
//   for(i of arr){
//    result.push(Math.sqrt(i))
//   }
//   return result
// }
// console.log(squareRoot(array));
/*
let arr = ["Nandhu", "Sohan", "Anand", "Abhijith", "Rojesh"]
let findStudent = (allStudents, studentName) => {
  return allStudents.includes(studentName)
}
console.log(findStudent(arr, "Nandhu"))
*/

let count = 1
let numbers = []
while(count <= 100){
  if(count %3 === 0){
    numbers.push("fizz")
  }else if (count %5===0){
    
      numbers.push("Buzz")
    
  }else{numbers.push(count)
}if(count %3===0 & count%5===0){
  numbers.push("FizzBuzz")
}
  
  count++
}
console.log(numbers)