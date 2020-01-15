//DOM Elements

var range = document.getElementById('myRange')
var tipOutput = document.getElementById('tipPercent')
var calcBtn = document.getElementById('calculate')
var billTotal = document.getElementById('billInput')
var result = document.getElementById('result')


//Slider Math
range.ondrag = function(){
    tipOutput.innerHTML = range.value + '%';
}



//Button to run

calcBtn.onclick = function(){
    var theBill = parseFloat(billTotal.value)
    var tip = (theBill * (range.value/100)).toFixed(2)
    var total = (theBill + parseFloat(tip)).toFixed(2)
    var out = '<strong>TIP AMOUNT:</strong> $${tip}<br/><strong>TOTAL BILL:</strong> $${total}'
    result.innerHTML = out
}