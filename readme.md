## Write short notes on below array methods with code examples

## reverse() -

Revesed all of the elaments in the array

 ```js
let arr=["apple","asus","hp"]
console.log(arr.reverse());

```


## sort() -

The sort() method sorts the elements as strings in alphabetical and ascending order. The sort() method overwrites the original array. 

```js

let names =["ronaldo","messi","neymar","pepe"]
console.log(names.sort());
    
```

## fill() -

The fill() method fills specified elements in an array with a value. The fill() method overwrites the original array. Start and end position can be specified.

```js

let arr =[1,2,3,4,5]
console.log(arr.fill("h",1,3));

```

## filter() -

create a shadow copy of a portion of given array filtered down to just the elament that passes the test.

```js

let arr=[1,2,3,4,5]
let result =arr.filter((item)=>{
    return item % 2===0
    
})
console.log(result);

```


## some() -

The some() method checks if any array elements pass a test (provided as a callback function). The some() method executes the callback function once for each.

```js 

let arr =[1,2,3,4,5]

let isEven = (num)=>{
    return num % 2 ===0
}
let outPut = arr.some (isEven)
console.log(outPut);

```


## every() -

Test with the all the elements in the array pass the tests implimented by the provided function it return a boolean value.

```js 

let arr =[2,,4,6]

let isEven=(num)=>{
    return num % 2===0
}
let outPut = arr.every (isEven)
  console.log(outPut);

```



## map() -

map() creates a new array from calling a function for every array element

```js
let arr =[1,2,3,4,5]
arr.map((item)=>{
    console.log(item *2);
    
})

```

## forEach() -

Exicute provide a function ones for each in the array  

```js
 let arr = [1,2,3,4,5]
 let isEven =(num)=>{
 return num % 2 ===0
}
let result = arr.forEach((item)=>{
 console.log(isEven(item));
        
})

```


## reduce() -

iterate and reduce an arrays value into one value
     
```js

  let arr =[100,10,20]
  let myFunction = (accumulator,currentValue)=>{
        return accumulator-currentValue
 }

   let result =arr.reduce(myFunction)
     console.log(result);

  ```

## indexOf() -

Returns the first index that which a Element can be found in the array or -1 if it is not presant.

```js
    let arr=["one","two","three","two"]
    console.log(arr.index of ("two"))
```

## 3. write a function that takes an array of numbers as an argument and returns the sum of its elements.

```js

let arr=[1,2,3,4]
 let add = (input)=>{
  let sum =0
  for (i of input){
    sum=sum+i  
  }
  return sum
 }

console.log(add(arr));


```

## 4. Create a function that filters strings in an array by their length

```js

let arr=[1,2,3,"4","5"]
      let result =arr.filter((string)=>{
          return string
          
      })
      console.log(result);


```


## 5. Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25]
## (Math.sqrt())

```js

 let array =[1,4,9,16,25]
      let squareRoot =(arr)=>{
       let result=[]
        for(i of arr){
         result.push(Math.sqrt(i))
        }
        return result
    }
      console.log(squareRoot(array));

```

## 6. Create an array with 5 student’s names. Then create a function that takes two parameters (allStudents and studentName). Iterate over all the students and find that specific user ‘studentName’

```js

let arr = ["Nandhu", "Sohan", "Anand", "Abhijith", "Rojesh"]
let findStudent = (allStudents, studentName) => {
  return allStudents.includes(studentName)
}
console.log(findStudent(arr, "Nandhu"))

```

## 7.  Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(write the code in the browser’s snippet and invoke the function inside the console)

```js

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


```

