function clearScreen() {
    document.getElementById("result").value="";
}


function display(key) {    
if (key == '=')
   calculate();
else if (key=="&#8592;")
    clearPrev();
else
    document.getElementById("result").value += key;
}

function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}
function clearPrev (){
    var p = document.getElementById("result").value;
    var u = p.toString();
    var l = u.length;
    l -= 1;
    p = u.slice(0,l);
    u = parseInt(p);
    document.getElementById("result").value = u;
}
