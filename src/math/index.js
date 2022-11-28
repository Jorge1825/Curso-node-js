function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}



module.exports = {
    add,
    subtract,
    multiply,
    divide
}

vector = [1,2,3,4,5,6,7,8,9,10];

vector.splice(0, 2);

console.log(vector); //resultado :