function convertf() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celcius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = fahrenheit + "F is " + celcius.toFixed(2) + "c";
}
function convertc() {
    let celcius = parseFloat(document.getElementById("celcius").value);
    let fahrenheit = (celcius * 9 / 5) + 32;
    document.getElementById("result1").innerHTML = celcius + "C is " + fahrenheit.toFixed(2) + "F";
}
function convertk() {
    let celcius1 = parseFloat(document.getElementById("celcius1").value);
    let kelvin = (celcius1 + 273);
    document.getElementById("result2").innerHTML = celcius1 + "C is " + kelvin + "K";
}
function convertd() {
    let kelvin1 = parseFloat(document.getElementById("kelvin").value);
    let celcius2 = (kelvin1 - 273);
    document.getElementById("result3").innerHTML = kelvin1 + "K is " + celcius2 + "C";
}
