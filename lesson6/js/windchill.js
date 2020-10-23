    function windChill(){
        var temp = parseFloat(document.getElementById("temp").innerText);
        var speed = parseFloat(document.getElementById("speed").innerText);
        var result = "";
    
        (temp <= 50 && speed > 10) ? result = ((35.74+(0.6215 * temp)) - (35.75*Math.pow(speed,0.16))+(0.4275*temp)*(Math.pow(speed,0.16))).toFixed(2) : result = "N/A";
    document.getElementById("windChill").innerHTML = result;