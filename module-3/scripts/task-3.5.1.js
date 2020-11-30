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
    
    //get the cart total
//function called array so can reuse the function later.
    function shoppingCartTotalPrice( arr ) { //step1, create a function that takes 1 parameter (the array)
        
        let totalPrice = 0; //step 2, create a variable inside the function called totalprice

        for ( let index = 0; index < arr.length; index++ )
                { //step 3, loop through each item of hte array and add the value of the item to the total price.
           
            totalPrice = totalPrice + (arr[index].price * arr[index].quantity)//pulls the first item in shopping cart price field, pulls quantity field in first part too
                }

        //step 4. return the total price variable
        return totalPrice.toFixed(2); //evoke / calls the function 

    }
    let message = 'The cost of all your items comes to: £'
        console.log(message + shoppingCartTotalPrice (shoppingCart));







    