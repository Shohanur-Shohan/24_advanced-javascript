const numbers = [1, 2, 3, 4, 5, 6, 7];
// const output = [];   //push in this array

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }//method 1 end

//method 2 start

// function square(element){     //method outside function
//     return element * element;
// }
// const square = element => element * element;  //function small with arrow
// const square = x => x * x;  

// //function is inside of map
// numbers.map(function(element, index, array){ //index to find array element position
//     console.log(element, index, array);
// }) 
// const result  = numbers.map(function(element, index, array){
    
// }) 
// console.log(result);

// //map in 1 line
// const result = numbers.map(x => x * x );
// console.log(result);



//filter start
const bigger = numbers.filter(x => x < 5 );
console.log(bigger);

// find
const bigger2 = numbers.find(x => x > 5 ); //finds one & then stops
console.log(bigger2);

