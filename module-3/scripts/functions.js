/*
Delcaring a Function

To declare a function you use the function keyword followed by the function name, a list of parameters, and the funciton body.

function functionName( parameters) {
    function body

    CODE GOES HERE
}
*/

function greeting( name ) {
    console.log( 'Hello ' + name );
}

greeting( 'Kirsty' );

greeting( 'Luke' );

function nameAndAge( name, age ) {
    console.log( name + 'is ' + age + ' years old';)
}

nameAndAge('Kirsty', 37 );

//returning a value. If we didnt specify the result, it would produce undefined. 

function say( message ) {
    console.log( message );
}

var result = say('Hello');

console.log( 'Result: ', result );

function add( a, b){
    return a + b;
}

console.log( add( 1, 2 ) );

var onePlusTwo = add(1, 2);

var onePlusTwo = add(2, 2);

console.log( onePlusTwo);

console.log( TwoPlusTwo);