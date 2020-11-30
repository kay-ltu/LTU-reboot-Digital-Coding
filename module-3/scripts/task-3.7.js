const listItems = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('.main .image-selections .images');

let filterSearch = document.querySelector('input[name="filter"]'); // Grabbing hold of the search input

let filterButton = document.querySelector('.filter-button');
// Grabbing hold of the filter button
 
function toggleActiveClass( active ){
    listItems.forEach( function( item ) {
      item.classList.remove('active');
    })
    active.classList.add('active');
}

function toggleimages( dataClass ){
  
    if( dataClass === 'all') {  
      // if the data-class is equal to all ( The button ALL is selected )
        allimages.forEach( function( image ) {
          
          image.style.display = 'block';
          
        });
      
    } else { // if not then ...
      
        allimages.forEach( image => { image.dataset.class === dataClass ? image.style.display = 'block' : image.style.display = 'none'; });
      
      // if(image.dataset.class === dataClass ) { // and check the data-class
          //     image.style.display = 'block'; // then any what every data class has been selected, e.g, if it was tiger show just the tigers
          // } else {                                // Otherwise ....
          //     image.style.display = 'none'; // hide the images that don't have the data-class that has been selected
          // }
      
    }
  
}

listItems.forEach( function( item ) {
  item.addEventListener( 'click', () => {
    toggleActiveClass( item );
    toggleimages( item.dataset.class );
  });
});



