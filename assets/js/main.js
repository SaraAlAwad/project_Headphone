
let fullname = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let checkbox = document.getElementById("subscribe");
console.log("test");

function send() {
    console.log(fullname.value);
    console.log(email.value);
    console.log(number.value);
    console.log(message.value);
    console.log(checkbox.value);
    var x = document.getElementById("subscribe").checked;
    console.log(x);
    //cheackbox needs more work :( ich habe keine zeit mehr
}