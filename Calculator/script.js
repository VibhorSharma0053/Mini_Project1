function update(char) {
  let display = document.getElementById("display");
  display.value += char;
}
function clearDisplay() {
  let display = document.getElementById("display");
  display.value = "";
}
function equal() {
  let display = document.getElementById("display");
  let expression = display.value;
//   display.value = eval(expression);
  try{
    display.value = eval(expression);
  }catch{
    let err = document.getElementById("error")
    err.innerHTML = `Error! ${expression} is invalid Expression`;
  }
}
function backSpace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
