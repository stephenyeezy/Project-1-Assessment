/*----- app's state (variables) -----*/
let inputValue;
let displayTotal;

/*----- cached element references -----*/
numberEl = document.querySelector("input");
runTotalEl = document.querySelector('h3')

/*----- event listeners -----*/
document.getElementById("plus").addEventListener('click', addTotal)
document.getElementById("minus").addEventListener('click', subTotal)

/*----- functions -----*/
let i = parseInt(numberEl.value)

init();
function init() {
    displayTotal = 0;
    runTotalEl.textContent = displayTotal;
    render();
}

function render() {
    if (displayTotal < 0) {
        runTotalEl.textContent = displayTotal;
        runTotalEl.style.color = 'red'
    } else {
        runTotalEl.textContent = displayTotal;
        runTotalEl.style.color = 'black'
    }
    
}

function addTotal(evt) {
    i = parseInt(numberEl.value)
    numberEl.textContent = i;
    displayTotal += i;
    render();
    
}
function subTotal(evt) {
    i = parseInt(numberEl.value)
    numberEl.textContent = i;
    displayTotal -= i;
    render();
    
}