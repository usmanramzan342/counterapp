// let countel = document.querySelectorAll(".countBar");
// let valu1 = document.querySelectorAll("h1");
// let valu2 = document.querySelectorAll("h2");


// function addNumber() {
//     let countBar = countel[0].ariaValueMax;

//     if(isNaN(countBar)){
//         // console.error('count value must be a number');
//         valu2[0].innerHTML = "count value must be a number"
//     }
//     else{
//         console.log(`your number is:$(countbar).`);
//         valu1[0].innerHTML = Number(valu1[0].innerHTML) + Numbar(countbar);
//     }
// }

let countEl = document.querySelectorAll('.count-form');
let countH1El = document.querySelectorAll('.count');
let errorMsg = document.querySelectorAll('.error-msg');

function addCount() {
    let countElVal = countEl[0].value;
    printMsg(countElVal, "+");
}


function minusCount() {
    let countElVal = countEl[0].value;
    printMsg(countElVal, "-");
}

function printMsg(formVal, operator) {
    if (isNaN(formVal)) {
        errorMsg[0].innerHTML = 'Count value must be a number.';
    }
    else if (operator === "+") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) + Number(formVal);
        errorMsg[0].innerHTML = "";
    }
    else if (operator === "-") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) - Number(formVal);
        errorMsg[0].innerHTML = "";
    }
}