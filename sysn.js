"use strict"
const promise=new Promise((resolve,reject)=>{
    const error=true    ;
    if(error){
        resolve("kk");
    }
    else{
        reject("I am");
    }
})

const next=new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("Welcome")
        
    }, 1000);
})

console.log(promise);
next
.then(value=>{
    console.log( value);
}
    
)