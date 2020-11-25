function drinkOrder (size, drink){

switch(drink) {
    case 'cola' : 
    console.log( 'You have ordered ' + size + ' ' + drink );
break;
case 'lemonade' : 
    console.log( 'You have ordered ' + size + ' ' + drink );
break;
case 'orangeade' : 
    console.log( 'You have ordered ' + size + ' ' + drink );
break;
    default:
        console.log( 'Unfortunately we do not have that ' + drink);
        break;
}



}
drinkOrder('small', 'orange');