const getHistory = () => document.getElementById("history-value").innerText;

const printHistory = (num) => {
  document.getElementById("history-value").innerText = num;
};

const getOutput = () => document.getElementById("output-value").innerText;

const getFormattedNumber = (num) => {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return num === "-" ? "-" : value;
};

const printOutput = (num) => {
  num === ""
    ? (document.getElementById("output-value").innerText = num)
    : (document.getElementById("output-value").innerText =
        getFormattedNumber(num));
};

const reverseNumberFormat = (num) => Number(num.replace(/,/g, ""));

const operator = document.querySelectorAll(".operator");
operator.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.id === "clear") {
      printHistory("");
      printOutput("");
    }
    if (op.id === "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output === "" && history !== "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output !== "" || history !== "") {
        output = output === "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (op.id === "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + op.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
});

const number = document.querySelectorAll(".number");
number.forEach((num) => {
  num.addEventListener("click", () => {
    let output = reverseNumberFormat(getOutput());
    if (output !== NaN) {
      output += num.id;
      printOutput(output);
    }
  });
});
