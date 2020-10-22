const defaultResult = 0;
let resultNumber = defaultResult;
let logCalc = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeLog(operation, currentResult, newValue, outputResult) {
  const logEntry = {
    operation: operation,
    currentResult: currentResult,
    newValue: newValue,
    outputResult: outputResult,
  };
  logCalc.push(logEntry);
  console.log(logEntry);
}

function createTextCalcAndWriteOutput(operator, initValue, userValue) {
  const resultText = `${initValue} ${operator} ${userValue}`;
  outputResult(resultNumber, resultText);
}

function calc(calcType) {
  const enteredNumber = getUserNumberInput();
  const currentNumber = resultNumber;
  if (
    (calcType !== 'ADD' &&
      calcType !== 'SUBTRACT' &&
      calcType !== 'MULTIPLY' &&
      calcType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    outputResult(resultNumber, 'Invalid Operation');
    return;
  }

  let mathOperator;

  if (calcType === 'ADD') {
    mathOperator = '+';
    resultNumber += enteredNumber;
  } else if (calcType === 'SUBTRACT') {
    mathOperator = '-';
    resultNumber -= enteredNumber;
  } else if (calcType === 'MULTIPLY') {
    mathOperator = '*';
    resultNumber *= enteredNumber;
  } else if (calcType === 'DIVIDE') {
    mathOperator = '/';
    resultNumber /= enteredNumber;
  }

  createTextCalcAndWriteOutput(mathOperator, currentNumber, enteredNumber);
  writeLog(calcType, currentNumber, enteredNumber, resultNumber);
}

function add() {
  calc('ADD');
}

function subtract() {
  calc('SUBTRACT');
}

function multiply() {
  calc('MULTIPLY');
}

function divide() {
  calc('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
