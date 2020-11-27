let heading1 = document.querySelectorAll('h1')[0];

heading1.style.color = 'red';//change colour to red

let paragraph = document.querySelectorAll('p')[0];


paragraph.style.color = 'green';//change colour to green



//console.log( itemClass) ;

let image = document.getElementById('image')
console.log( image.alt) ;//in console show the alt text
console.log( image.src) ;//in console show the source

image.src= 'https://images.unsplash.com/photo-1606139053437-2551834526cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60';//replace the image source
image.alt = apple pie;//replace the image source