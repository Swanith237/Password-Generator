var genPass;
var passStr;

function generate() {
    const property = {};
    var passlength = document.getElementById('passLength');
    genPass = document.getElementById('genPass');

    var uppercaseCheck = document.getElementById('uppercaseCheck');
    var lowercaseCheck = document.getElementById('lowercaseCheck');
    var numbersCheck = document.getElementById('numbersCheck');
    var symbolsCheck = document.getElementById('symbolsCheck');

    document.getElementById('passLengthLabel').defaultValue = "8";

    class Property {
        constructor(propertyValue) {
            this.propertyValue = propertyValue;
        }
    };

    property.passlength = new Property(passlength.value);
    property.uppercase = new Property(uppercaseCheck.checked);
    property.lowercase = new Property(lowercaseCheck.checked);
    property.numbers = new Property(numbersCheck.checked);
    property.symbols = new Property(symbolsCheck.checked);

    genPass.value = generatePass(passlength.value, uppercaseCheck.checked, lowercaseCheck.checked, numbersCheck.checked, symbolsCheck.checked);

    console.table(property);
    console.log(`Password Generated: ${passStr}`);
    return false;
}

function passwordLength(length) {
    document.getElementById('passLengthLabel').innerHTML = "Password Length: " + length;
    generate();
}

function randomUpper() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function randomLower() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function randomNum() {
    return Math.floor(Math.random() * 10);
}

function randomSym() {
    return String.fromCharCode(33 + Math.floor(Math.random() * 15));
}

function generatePass(len, upper, lower, num, sym) {
    passStr = "";

    for (i = 0; i < len; i++) {
        rand = Math.floor(Math.random() * 4)

        if (rand == 0 && upper == true) {
            passStr = passStr.concat(randomUpper());
        } else if (rand == 1 && lower == true) {
            passStr = passStr.concat(randomLower());
        } else if (rand == 2 && num == true) {
            passStr = passStr.concat(randomNum());
        } else if (rand == 3 && sym == true) {
            passStr = passStr.concat(randomSym());
        } else {
            i--;
        }
    } return passStr;
}

function copyPassword() {
    genPass.select();
    document.execCommand("copy");
    document.getElementById('copyButton').innerHTML = "Copied!";
};