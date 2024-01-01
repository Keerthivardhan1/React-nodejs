function y(a,b){
    console.log("this is y function");
    return a+b;
}

function x(y){
    console.log("this is x function");
    return y(2,3)/2;
}

// console.log(x(y));

const arr = [1,2,3,4,5]

//-------------         map 

// suppose if we want new array with double the values of the initial arrays 
// --twice = [2,4,6 ....]
// -------------------- transformation or manupulating the all elements in the given array 

const twice = arr.map(binary)      // arr will not change

function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
}

// console.log(arr);

/*

const twice = arr.map(function binary(x){
    return x.toString(2);
})

const twice = arr.map((x)=>{
    return x.toString(2);
})


*/

// console.log(twice);


//  ----------  filter =====> filter the values inside it 


const oddelements = arr.filter(isEven)

function isOdd(x){
    return x%2;
}

function isEven(x){
    return x%2 === 0 ;
}

// console.log(oddelements);



//---------------- reduce --------

function findsum(arr){
    let sum =0;
    for (ele in arr){
        // console.log(ele);
        sum += Number(ele);
    }
    return sum;
}

// console.log(findsum(arr));



const totall = arr.reduce((acc , curr) => {
    // curr refers to the each element of the array
    // acc accumulates the values 
    console.log(curr);
    acc += curr;
    return acc
} , 0 );   // 0 is the initiall value of the acc 

console.log(totall);