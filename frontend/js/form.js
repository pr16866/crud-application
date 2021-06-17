const input = document.querySelectorAll("input");
const i = document.querySelectorAll("i");
const span = document.querySelectorAll("span");
const each = document.querySelector(".each");
const validation = () => {

    for (let l = 0; l <= 7; l++) {
        i[l].style.color = "transparent";
    }


    let input0 = input[0].value;
    let flag = true;
    // validation for name 

    if (input0 == "") {
        span[0].innerText = "*Please enter the name*";
        i[0].style.color = "red";
        input[0].style.borderColor = "red";
        flag = false;
    }
    else if (input0.match(/[0-9~@#$%^&*!()_+=`{}:;><.,/\|]/g) != null) {
        span[0].innerText = "*Special characters and numbers are not allowed in name*";
        i[0].style.color = "red";
        input[0].style.borderColor = "red";
        flag = false;

    }
    else {
        span[0].innerText = "";
        i[1].style.color = "green";
        input[0].style.borderColor = "green";
        console.log("name is correct");
    }

    // validation for email
    let input1 = input[1].value;
    if (input1 == "") {
        span[1].innerText = "*please enter the email*";
        i[2].style.color = "red";
        input[1].style.borderColor = "red";
        flag = false;
    }
    else if (input1.indexOf("@") <= 0) {
        span[1].innerText = "*position of @ is wrong*";
        i[2].style.color = "red";
        input[1].style.borderColor = "red";
        flag = false;
    }
    else if ((input1.indexOf(".") != input1.length - 4) && (input1.indexOf(".") != input1.length - 3)) {
        span[1].innerText = "*position of . is wrong*";
        i[2].style.color = "red";
        input[1].style.borderColor = "red";
        flag = false;
    }
    else {
        span[1].innerText = "";
        i[3].style.color = "green";
        input[1].style.borderColor = "green";
        console.log("email is correct");
    }
    // validation for number
    let input2 = input[2].value;

    if (input2 == "") {
        span[2].innerText = "*please enter the phone number*";
        i[4].style.color = "red";
        input[2].style.borderColor = "red";
        flag = false;
    }
    else if (input2.length != 10) {
        span[2].innerText = "*phone number must be 10 digit*";
        i[4].style.color = "red";
        input[2].style.borderColor = "red";
        flag = false;
    }
    else {
        span[2].innerText = "";
        i[5].style.color = "green";
        input[2].style.borderColor = "green";
    }
    // validation for city
    let input3 = input[3].value;
    if (input3 == "") {
        span[3].innerText = "*please enter your state*";
        i[6].style.color = "red";
        input[3].style.borderColor = "red";
        flag = false;
    }
    else {
        span[3].innerText = "";
        i[7].style.color = "green";
        input[3].style.borderColor = "green";
    }
    // validation for gender
    let input4 = input[4].checked;
    let input5 = input[5].checked;
    let input6 = input[6].checked;
    console.log(`The value of input is ${input4} ${input5} ${input6}`);
    if ((input4 == "") && (input5 == "") && (input6 == "")) {
        span[4].innerText = "*please select your gender*";
        flag = false;
    }
    else {
        span[4].innerText = "";
    }
return flag;

}
