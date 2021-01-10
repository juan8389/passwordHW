var upperCaseRandom = "";
var lowerCaseRandom = "";
var myNumbers = "";
var mySpecials = "";
var field = document.getElementById('password-1');
var myBtn = document.getElementById('generate');


//  -------------------Uppercase characters-------------------


function myUpper(n) {
    while (upperCaseRandom.length < n) {
        upperCaseRandom += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    };

};

//  -------------------Special characters-------------------

function specialChar(f) {
    var specialChar = "!@#$%^&*()_+=-?";

    while (mySpecials.length < f) {
        mySpecials += specialChar[Math.floor(Math.random() * specialChar.length)];
    };
    console.log(mySpecials);
};

//  to shuffle the final password
function getRandomPassword(d) {
    var arr = d.split('');
    arr.sort(() => {
        return 0.5 - Math.random();
    });
    password = arr.join('');
    return password;
};


// ------------------lowercase-------------------
function myLower(t) {
    while (lowerCaseRandom.length < t) {
        lowerCaseRandom += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    };
    console.log(lowerCaseRandom);
};

// ----------------------numbers-------------------
function numbersRan(r) {
    var numbers = "1234567890";

    while (myNumbers.length < r) {
        myNumbers += numbers[Math.floor(Math.random() * numbers.length)];
    };
    console.log(myNumbers);
}


//main button function //
function deploy() {
    // to get a number value from user  
    var passwordLength = prompt('How long do you want your password from 8-128 characters?');
    console.log("Value of password is: " + passwordLength);
    // convert string value to number
    passwordLength = parseInt(passwordLength);
    // check value is number 
    if (isNaN(passwordLength)) {
        //  to return home if value is not a number
        alert('input not valid');
        location.reload();
        return false;
    } else {
        if (passwordLength >= 8 && passwordLength <= 128) {
            //  execute functions to get random values}
            myUpper(passwordLength);
            specialChar(passwordLength);
            myLower(passwordLength);
            numbersRan(passwordLength);
        }
        else {
            alert('input not valid');
            location.reload();
            return false;
        }
    };

    var useUpper = confirm('Do you want to use uppercase?');
    if (useUpper == true) {
        upperCaseRandom = upperCaseRandom;
    }
    else {
        upperCaseRandom = '';
    };

    var useSpecials = confirm("Do you want to use special characters?");
    if (useSpecials == true) {
        mySpecials = mySpecials;
    }
    else {
        mySpecials = '';
    }

    var useLower = confirm('Do you want lowercase?');
    if (useLower == true) {
        lowerCaseRandom = lowerCaseRandom;
    }
    else {
        lowerCaseRandom = '';
    };

    var useNumbers = confirm("Do you want to use numbers?");
    if (useNumbers == true) {
        myNumbers = myNumbers;
    }
    else {
        myNumbers = '';
    }
    var password = upperCaseRandom + mySpecials + lowerCaseRandom + myNumbers;
    // shuffle the values 
    var password2 = getRandomPassword(password);
    // to get final Password length based on user preferences
    var finalPassword = password2.slice(0, passwordLength);
    // display password 
    field.innerHTML = finalPassword;

};

// call function
myBtn.addEventListener('click', deploy);


// var password = lowerCaseRandom + upperCaseRandom + mySpecials + myNumbers;
// console.log("this is before shuffle: " + password);

