
    let amountStr = prompt("Enter amount:");
    let amount = parseInt(amountStr);
    if(!isNaN(amount) && amount >= 1000) {
        let yearsStr = prompt("Enter number of years:");
        let years = parseInt(yearsStr);
        if(!isNaN(years) && years >= 1 && yearsStr % 1 == 0){
            let percStr = prompt("Enter number of percentage of year:");
            let perc = parseInt(percStr);
            if(!isNaN(perc) && 0 < perc <= 100) {
                let totalAmount = (amount * (Math.pow((1 + (perc / 100)), (1 * years))));
                let totalProf = totalAmount - amount;

                alert(`Initial amount: ${amount}\nNumber of years: ${years}\nPercentage of year: ${perc}\n\nTotal profit: ${totalProf.toFixed(2)}\nTotal amount: ${totalAmount.toFixed(2)}`);
            }else {
                showInvalid();
            }
        }else {
            showInvalid();
        }
    }else {
        showInvalid();
    }

function showInvalid () {
    alert("Invalid input data");
}
















/*let amountStr = prompt('Enter amount');
let amount = parseInt(amountStr);
let yearsStr = prompt('Enter number of years');
let years = parseInt(yearsStr);
let percStr = prompt('Enter percentage of a year');
let perc = parseInt(percStr);

let totProf = amount / perc;
let totAmount = amount + totProf;

let userInput = 'Initial amount: ' + amount + '\nNumber of years: ' + years + '\nPercentage of year: ' + perc;

let total ='\n\nTotal profit: ' + totProf + '\nTotal amount: ' + totAmount;

alert(userInput + total);*/

