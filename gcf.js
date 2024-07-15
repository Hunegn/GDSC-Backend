
function calculateGCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


function getInputsAndCalculateGCF() {
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 = parseInt(prompt("Enter the second number: "));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
    } else {
        let gcf = calculateGCF(num1, num2);
        alert(`The GCF of ${num1} and ${num2} is ${gcf}.`);
    }
}
getInputsAndCalculateGCF();
