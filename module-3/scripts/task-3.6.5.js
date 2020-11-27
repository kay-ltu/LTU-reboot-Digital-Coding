let div = document.querySelector('div');

let input = document.querySelector('input');

let button = document.querySelector('button');

    button.addEventListener('click', function( event ){
            
        event.preventDefault();

        div.textContent = 'Hello ' + input.value;
   
});