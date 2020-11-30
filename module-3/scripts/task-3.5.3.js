let shoppingCart = [
    {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    },
    {
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    },
    {
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    },
    {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    },
    {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    },
    {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    },
    {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    },
    {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    },
    {
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    },
    {
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }];


//Apply a discount of 20% to 'type:food' items only
function discountFood( arr ) { 

    let totalPrice = 0; 

    for ( let index = 0; index < arr.length; index++ )  {

       if ( arr[index].type === 'food' ) {
         let discount = ( arr[index].price * 20 ) / 100;

         totalPrice = totalPrice + (arr[index].price - discount ) * arr[index].quantity; 
       
       } else {

        totalPrice = totalPrice + (arr[index].price * arr[index].quantity)
            }

     }
    return totalPrice.toFixed(2); 

}




    
//get the cart total with discount
    function discountAmount( arr, discountAmount, type ) { //the function discount sets parameters for the array, the disocunt amount and the type of goods

        let totalPrice = 0;  //starting at 0

        for ( let index = 0; index < arr.length; index++ )  { //loop the changeable index point each time checking if reached the bottom of the list, reading each entry in turn

           if (arr[ index ].type === type ) { //if each item has a type then...
               let discount = ( arr[ index ].price * discountAmount ) / 100; //a viariable of discount can apply, looking at the array and to times the price by the discount amount
            
           
totalPrice = totalPrice + ( arr  [index ].price - discount ) * arr[index].quantity; //The total price is now total price of the array prices minus the discount times by the quantity of each item in the shopping list if people ordered more than one of each.

           } else if ( type === 'any') {
               let discount = ( arr[ index ].price * discountAmount) / 100;
               totalPrice = totalPrice + ( arr[ index ].price - discount ) * arr[ index ].quantity;
           }else {
               totalPrice=totalPrice+(arr[index].price*arr[index].quantity);
           }
        }
        return totalPrice.toFixed(2);  // return the total price in two decimal places.

    }
  
    let message = 'The cost of all your items comes to: £'
console.log(message + discountAmount( shoppingCart, 20, 'any')); //Return discount amount function, stating the discount amount, applying to any type.
