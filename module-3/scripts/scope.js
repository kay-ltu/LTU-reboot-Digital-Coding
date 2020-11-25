// global scope - available to everything

//local scope - only available to the function that called it, unless you return the value.

var globalScope = 'GLOBAL SCOPE'

console.log( globalScope);
function scope () {
 var localScope = 'LOCAL SCOPE';

 console.log(globalScope);

 return localScope;
}
var scopeValue = scope();

console.log( scopeValue );