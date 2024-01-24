const printBt = document.getElementById("print");
const clearBt = document.getElementById("delete");

function printLine() {
    var inputValue = document.getElementById('input').value;
    console.log(inputValue);
}

function clearTextBox() {
    document.getElementById('input').value = '';
}

printBt.addEventListener('click', printLine);
clearBt.addEventListener('click', clearTextBox);