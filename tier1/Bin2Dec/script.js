const floatingInput = document.getElementById("floatingInput");
const display = document.getElementById("display");

const checkAndDisplay = (fun) => {
  floatValue = floatingInput.value;
  const trueOrFalse = floatValue.split("").every((e) => e === "1" || e === "0");
  if (trueOrFalse === false)
    display.innerHTML = "error. Only 0 and 1 are accepted as input";
  if (trueOrFalse === true) display.innerHTML = fun();
  if (floatValue === "") display.innerHTML = 0;
};

floatingInput.addEventListener("keyup", (e) => {
  checkAndDisplay();
});
