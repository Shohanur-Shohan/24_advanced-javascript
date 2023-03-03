//0    //false
//""
//null
//NaN
//false

//"0"<, " ", [], {}, true,  // truth



// const name = "0";
let name = '';
console.log(name);

// if(name){
//     console.log("condition true"); //method 1
// }
if( name || name == 0 ){
    console.log("condition true"); //method 2
}
else{
    console.log("condition false");
}