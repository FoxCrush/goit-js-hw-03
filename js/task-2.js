const countProps = function(obj) {
    'use strict';
  // Write code under this line
  const numberOfProps = Object.keys(obj)
  return numberOfProps.length
};

//console.log(countProps({})); // 0

//console.log(countProps({a:1, b:1})); // 2

//console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5
const myObject = {
 prop1 : 1,
 prop2 : 2,
 'prop three' : 3,
}
console.log ('hey');
console.log (countProps(myObject));