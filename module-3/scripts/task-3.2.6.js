var temperature = 20;
var age = 18;

if (temperature < 0) {
    console.log('stay inside')
}

else if (temperature < 30 && age < 18) {
    console.log('wear a coat and a hat and notify an adult')
}

else if (temperature < 50 || age < 18) {
    console.log('wear a coat and go with an adult')
} else { 
    console.log('just wear pants and a vest is fine see you when you get back');
}