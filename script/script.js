function addValue(){


let val1 = parseInt(document.getElementById("input_a").value,10);
let val2 = parseInt(document.getElementById("input_b").value,10);
//alert(val1);
window.console.error(val1);
window.console.error(val2);
let output = val1+val2;
window.console.error(output);
//document.getElementsByName("output").innerHTML = output.toString();
document.mycalculator.output.value = output.toString();
    
}


function mulValue(){
let val1 = parseInt(document.getElementById("input_a").value,10);
let val2 = parseInt(document.getElementById("input_b").value,10);
window.console.error(val1);
window.console.error(val2);
let output = val1 * val2;
window.console.error(output);
document.mycalculator.output.value = output.toString();
   // document.mycalculator.output.value = text;
}

function divValue(){
let val1 = parseInt(document.getElementById("input_a").value,10);
let val2 = parseInt(document.getElementById("input_b").value,10);
window.console.error(val1);
window.console.error(val2);
let output = val1 / val2;
window.console.error(output);
document.mycalculator.output.value = output.toString();
    //document.mycalculator.output.value = text;
}
