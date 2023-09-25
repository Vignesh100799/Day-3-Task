
// Ques 1 : how to compare two JSON have the properties wihtout order ?


let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var assumption=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            assumption=false;
            break;
        }
    }
}
else {
    assumption=false;
}
console.log(assumption);

// // output : true

// // Ques 2 : Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.

var request = new XMLHttpRequest();


request.open("GET", "https://restcountries.com/v3.1/all");


request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
    for( i = 0; i< result.length ; i++){
console.log(result[i].flags)
    }
    
}


// Ques 3 :Use the same rest countries and print all countries name, region, subregion and population .

var request = new XMLHttpRequest();


request.open("GET", "https://restcountries.com/v3.1/all");


request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
    for( i = 0; i< result.length ; i++){
console.log(result[i].name);
console.log(result[i].region);
console.log(result[i].subregion);
console.log(result[i].population);
    }
    
}