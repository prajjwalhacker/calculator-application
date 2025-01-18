import React, { useEffect, useState } from 'react';
import './App.css';
import DynamicContainerCurve from './components/DyamicCurve/DyamicCurve';
import Function from './components/Function/Function';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import { validateEquation } from './utility/equationRegex';
import { functionsData } from './constants/data';


interface Coordinate {
  x: number;
  y: number;
}

interface FunctionObj {
  id: string;
  equation: string;
  output: number | null;
  input: number | null;
  inputPosition: Coordinate;
  outputPosition: Coordinate;
  isError: boolean;
  nextFunctionIndex: number;
  isFinal: boolean;
  isStart: boolean;
}

const App: React.FC = () => {
  const [inputPosition, setInputPosition] = useState<Coordinate>({ x: 0, y: 0 });
  const [outputPosition, setOutputPosition] = useState<Coordinate>({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState<number>(2);
  const [functionArr, setFunctionArr] = useState<FunctionObj[]>(functionsData);



  const computeEquation = (equation: string, value: number): number | null => {
    try {
      const sanitizedEquation = equation.replace(/\^/g, '**').replace(/x/g, `(${value})`);
      return eval(sanitizedEquation); 
    } catch (err) {
      console.error('Equation computation error:', err);
      return null;
    }
  };

  const calculateResult= ()=>{
    const newArr = JSON.parse(JSON.stringify(functionArr));
    let index = 0;
    let prevOutput;
    while(true) {
         newArr[index].input = index === 0 ? inputValue : prevOutput;
         if (!validateEquation(newArr[index].equation)) {
          newArr[index].isError= true;
         }
         else {
          newArr[index].isError= false;
         }
         newArr[index].output =  newArr[index].isError ? null : computeEquation(newArr[index].equation, newArr[index].input);
         prevOutput = newArr[index].output;
         if (newArr[index].nextFunctionIndex === -1) break;
         index = newArr[index].nextFunctionIndex-1;
    }

    setFunctionArr(newArr);
}

  useEffect(() => {
    if (functionArr[0]?.inputPosition?.x) {
      calculateResult();
    }
  }, [JSON.stringify(functionArr), inputValue]);

  return (
    <div className="main-container">
      <Input setInputPosition={setInputPosition} inputValue={inputValue} setInputValue={setInputValue} />
      <DynamicContainerCurve startCoordinate={inputPosition} endCoordinate={functionArr[0].inputPosition} />
      {functionArr.map((func) => (
        <React.Fragment key={func.id}>
          <Function functionObj={func} setFunctionArr={setFunctionArr} />
          {func.nextFunctionIndex !== -1 && (
            <DynamicContainerCurve
              startCoordinate={func.outputPosition}
              endCoordinate={functionArr[func.nextFunctionIndex - 1]?.inputPosition}
            />
          )}
        </React.Fragment>
      ))}
      <Output setOutputPosition={setOutputPosition} outputValue={functionArr.find((func) => func.isFinal)?.output || 0} />
      <DynamicContainerCurve
        startCoordinate={functionArr.find((func) => func.isFinal)?.outputPosition || { x: 0, y: 0 }}
        endCoordinate={outputPosition}
      />
    </div>
  );
};

export default App;
