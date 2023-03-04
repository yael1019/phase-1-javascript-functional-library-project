// create a function myEach that takes in either an obj or an array and a cb
const myEach = (collection, cb) => {
    let flip;
// check if the passed in value is an obj or an arr
    if(!Array.isArray(collection)) {
// if it is an obj then turn it into an array
        flip = Object.values(collection);
    } else {
        flip = collection;
    }
// itterate over the array 
    flip.forEach(el => {
// pass each element into the cb function
        cb(el);
    })
// return the arr?
    return collection;
}

// declare a function myMap that takes in a collection of data and an array
const myMap = (collection, cb) => {
    let flip;
// check to see if the collection is an array or an object
    if(!Array.isArray(collection)){
// if it is an object change it into an array
        flip = Object.values(collection);
    } else flip = collection;
// itterate over the array
    return flip.map(el => cb(el));
// pass each value through the cb 
// return a new array of renturned values from the cb
}

// declare a function myReduce that takes in a collection of data, a cb, and a number
const myReduce = (collection, cb, acc) => {
    let flip;
// check if the collection of data is an array
    if(!Array.isArray(collection)) {
// if it is an object turn it into an array
        flip = Object.values(collection);
    } else flip = collection;
// check if the input number is undefined
    if(acc === undefined) {
    // if it is, use reduce on the array and call the cb on each ele of the array 
    // return the returned value
        return flip.reduce((accum, curr) => acc = cb(accum, curr));
    } else {
// otherwise call reduce on the array using the input number as the incrementer
    // return the returned value
        return flip.reduce((accum, curr) => accum = cb(accum, curr), acc);
    }
}

// declare a function myFind that takes in a collection and a cb
const myFind = (collection, cb) => {
    let flip;
// check to see if the collection is an array or obj
    if(!Array.isArray(collection)) flip = Object.values(collection);
// if it is an object then change it to an array
    else flip = collection;
// call find on the array 
// return the returned value
    let found = flip.find(ele => cb(ele));
    return found;
}

const myFilter = (collection, cb) => {
    let flip;
// check to see if the collection is an array or obj
    if(!Array.isArray(collection)) flip = Object.values(collection);
// if it is an object then change it to an array
    else flip = collection;
// call find on the array 
// return the returned value
    return flip.filter(ele => cb(ele));
}

const mySize = collection => {
    let flip;
// check to see if the collection is an array or obj
    if(!Array.isArray(collection)) flip = Object.values(collection);
// if it is an object then change it to an array
    else flip = collection;
    return flip.length;
}

const myFirst = (arr, num) => {
    if(num === undefined) return arr[0];
    else {
        return arr.slice(0, num);
    }
}

const myLast = (arr, num) => {
    if(num === undefined) return arr[arr.length - 1];
    else {
        return arr.slice(-num);
    }
}

const myKeys = obj => Object.keys(obj);
const myValues = obj => Object.values(obj);