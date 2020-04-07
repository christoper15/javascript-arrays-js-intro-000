var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(x,y) {
var z = [y, ...x];
return z;
}

function destructivelyAddElementToBeginningOfArray(x,y) {
var y;
return x.unshift(y);
}

function addElementToEndOfArray(x,y) {
var z = [...x , y];
return z;
}

function destructivelyAddElementToEndOfArray(x,y) {
return x.push(y);
}

function accessElementInArray(x,y) {
return x[y];
}

function destructivelyRemoveElementFromEndOfArray(x) {
return x.shift();
}

function removeElementFromEndOfArray(x) {
return x.slice(0,x.length-1);
}
