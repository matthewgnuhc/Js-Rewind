//Get starting values from the screen
//Controller Function
function getString() {
    //Get the user's input
    let userString = document.getElementById("userString").value;
    //Version 2 --Test the user's input for length

    //Reverse the user's input - this is a seperate function
    let revString = reverseString(userString);

    //Display the result - this is a seperate function
    displayString(revString)
}

function reverseString(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;

    let revString = "";

    //User input = Frank
    //Frank is a string AND an array of characters
    //[F, r, a, n, k]
    //In a decremented for loop the startValue must be higher than the endValue.
    for (let i = startValue; i >= endValue; i--){
        revString += userString[i];
    }

    //loop 1 -"k"
    //loop 2 - "kn"
    //loop 3 - "kna"
    //loop 4 - "knar"
    //loop 5 - "knarF"
    return revString;

}

function displayString(revString) {
    let output = document.getElementById("results");

    output.innerHTML = revString;
}