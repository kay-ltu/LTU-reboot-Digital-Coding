let div = document.querySelector('div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('I am a para created in JS');

    paragraph.appendChild( paragraphText );
    div.appendChild ( paragraph );