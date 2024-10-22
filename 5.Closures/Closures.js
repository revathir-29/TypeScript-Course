var counterValue = 0;
function incrementCounter() {
    counterValue++;
}
function getCounterValue() {
    return counterValue;
}
incrementCounter();
console.log(getCounterValue());
incrementCounter();
console.log(getCounterValue());
