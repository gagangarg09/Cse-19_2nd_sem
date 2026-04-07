function checkNumber() {
    let num = document.getElementById("numberInput").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    if (num % 2 === 0) {
        document.getElementById("result").innerText = num + " is Even.";
    } else {
        document.getElementById("result").innerText = num + " is Odd.";
    }
}