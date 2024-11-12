import { Container, Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handlerNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  };

  const handleSumNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleMinusNumber = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleMultipleNumber = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleDivideNumber = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleEquals = () => {
    if(firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
      switch(operation){
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "*":
          handleMultipleNumber();
          break;
        case "/":
          handleDivideNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"onClick={handleMultipleNumber}/>
          <Button label="/" onClick={handleDivideNumber}/>
          <Button label="c" onClick={handleClear}/>
          <Button label="." onClick={() => handlerNumber('')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handlerNumber('7')}/>
          <Button label="8" onClick={() => handlerNumber('8')}/>
          <Button label="9" onClick={() => handlerNumber('9')}/>
          <Button label="-" onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handlerNumber('4')}/>
          <Button label="5" onClick={() => handlerNumber('5')}/>
          <Button label="6" onClick={() => handlerNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerNumber('1')}/>
          <Button label="2" onClick={() => handlerNumber('2')}/>
          <Button label="3" onClick={() => handlerNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
