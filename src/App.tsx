import React, { useEffect, useState } from 'react';
import './App.css';
import DynamicContainerCurve from './components/DyamicCurve/DyamicCurve';
import Function from './components/Function/Function';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import { v4 as uuidv4 } from 'uuid';


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
  const [functionArr, setFunctionArr] = useState<FunctionObj[]>([
    {
      id: uuidv4(),
      equation: 'x^2',
      output: null,
      input: null,
      inputPosition: { x: 0, y: 0 },
      outputPosition: { x: 0, y: 0 },
      isError: false,
      nextFunctionIndex: 2,
      isFinal: false,
      isStart: true,
    },
    {
      id: uuidv4(),
      equation: '2*x',
      output: null,
      input: null,
      inputPosition: { x: 0, y: 0 },
      outputPosition: { x: 0, y: 0 },
      isError: false,
      nextFunctionIndex: 4,
      isFinal: false,
      isStart: false,
    },
    {
      id: uuidv4(),
      equation: 'x/2',
      output: null,
      input: null,
      inputPosition: { x: 0, y: 0 },
      outputPosition: { x: 0, y: 0 },
      isError: false,
      nextFunctionIndex: -1,
      isFinal: true,
      isStart: false,
    },
    {
      id: uuidv4(),
      equation: '4*x',
      output: null,
      input: null,
      inputPosition: { x: 0, y: 0 },
      outputPosition: { x: 0, y: 0 },
      isError: false,
      nextFunctionIndex: 5,
      isFinal: false,
      isStart: false,
    },
    {
      id: uuidv4(),
      equation: 'x^3',
      output: null,
      input: null,
      inputPosition: { x: 0, y: 0 },
      outputPosition: { x: 0, y: 0 },
      isError: false,
      nextFunctionIndex: 3,
      isFinal: false,
      isStart: false,
    },
  ]);

  const validOperatorsRegex = /^[0-9x\s+\-*/^()]*$/;

  const validateEquation = (equation: string): boolean => {
    return validOperatorsRegex.test(equation);
  };

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
