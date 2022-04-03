const floatingInput = document.getElementById("floatingInput");
const display = document.getElementById("display");

const convertBinaryToDecimal = () => {
  return parseInt(floatingInput.value, 2);
};

const checkAndDisplay = (fun) => {
  floatValue = floatingInput.value;
  const trueOrFalse = floatValue.split("").every((e) => e === "1" || e === "0");
  if (trueOrFalse === false)
    display.innerHTML = "Error. Only 0 and 1 are accepted as input.";
  if (trueOrFalse === true)
    display.innerHTML = `The binary of ${floatValue} to decimal is ${fun()}!`;
  if (floatValue === "") display.innerHTML = "";
};

floatingInput.addEventListener("keyup", () => {
  checkAndDisplay(convertBinaryToDecimal);
});
