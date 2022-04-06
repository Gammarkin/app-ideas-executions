const previewer = document.getElementById("previewer");
const input = document.getElementsByClassName("input");
const boarderText = document.getElementById("boarderText");
const txt = document.getElementById("txt");
const newTxt = document.getElementById("newTxt");
newTxt.innerHTML =
  "(0px top-left, 0px top-right, 0px bottom-left, 0px bottom-right)";
const changeBoarderRadius = () => {
  if (input[0].value === "") input[0].value = "0";
  if (input[1].value === "") input[1].value = "0";
  if (input[2].value === "") input[2].value = "0";
  if (input[3].value === "") input[3].value = "0";
  previewer.style.borderRadius = `${input[0].value}px ${input[1].value}px ${input[3].value}px ${input[2].value}px`;
  boarderText.innerHTML = `(${input[0].value}px top-left, ${input[1].value}px top-right, ${input[3].value}px bottom-left, ${input[2].value}px bottom-right)`;
  newTxt.innerHTML = `border-radius: ${input[0].value}px,  ${input[1].value}px top-right, ${input[3].value}px bottom-left, ${input[2].value}px bottom-right`;
};

const copy = () => {
  navigator.clipboard.writeText(newTxt.innerText);
  txt.innerHTML = "Copied the text: " + newTxt.innerText;
  setTimeout(() => {
    txt.innerHTML = "";
  }, 3000);
};

document.getElementById("button").addEventListener("click", copy);
[...input].forEach((element) => {
  element.addEventListener("input", changeBoarderRadius);
});
