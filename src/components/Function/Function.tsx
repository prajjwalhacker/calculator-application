/* eslint-disable @typescript-eslint/no-explicit-any */
import './function.css';
import dragAndDrop from '../../../src/assets/images/drag-and-drop.svg';
import Circle from '../Circle/Circle';
import { useEffect, useRef } from 'react';
import Select from 'react-select';
import { functionsOptions } from '../../constants/data';

interface Coordinate {
  x: number;
  y: number;
}

interface FunctionObj {
  id: string;
  equation: string;
  inputPosition: Coordinate;
  outputPosition: Coordinate;
  isError: boolean;
  nextFunctionIndex: number;
  isStart: boolean;
  isFinal: boolean;
}

interface FunctionProps {
  functionObj: FunctionObj;
  setFunctionArr:  (props: any) => any;
}

const Function: React.FC<FunctionProps> = ({ functionObj, setFunctionArr }) => {
  const inputCircleRef = useRef<HTMLDivElement | null>(null);
  const outputCircleRef = useRef<HTMLDivElement | null>(null);

  const onChangeEquation = (value: string) => {
    setFunctionArr((prev: any) => {
      const newFunctionArr = [...prev];
      const id = functionObj.id;
      const index = newFunctionArr.findIndex((item) => item.id === id);
      if (index !== -1) {
        newFunctionArr[index].equation = value;
      }
      return newFunctionArr;
    });
  };



  const updatePositions = () => {
    if (inputCircleRef.current) {
      const rect = inputCircleRef.current.getBoundingClientRect();
      setFunctionArr((prev: any) => {
        const newFunctionArr = [...prev];
        const index = newFunctionArr.findIndex((item) => item.id === functionObj.id);
        if (index !== -1) {
          newFunctionArr[index].inputPosition = { x: rect.x, y: rect.y };
        }
        return newFunctionArr;
      });
    }

    if (outputCircleRef.current) {
      const rect = outputCircleRef.current.getBoundingClientRect();
      setFunctionArr((prev: any) => {
        const newFunctionArr = [...prev];
        const index = newFunctionArr.findIndex((item) => item.id === functionObj.id);
        if (index !== -1) {
          newFunctionArr[index].outputPosition = { x: rect.x, y: rect.y };
        }
        return newFunctionArr;
      });
    }
  }

  useEffect(() => {
     updatePositions();
  }, [functionObj.id, setFunctionArr]);




  useEffect(() => {
    window.addEventListener("resize", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <div className="function-container">
      <div className="function-header">
        <img src={dragAndDrop} alt="drag-and-drop" />
        <div className="function-title">Function: 1</div>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="equation" className="form-label">
            Equation
          </label>
          <div className="form-input">
            <input
              value={functionObj.equation || ''}
              onChange={(e) => {
                onChangeEquation(e.target.value);
              }}
            />
          </div>
          {functionObj?.isError && (
            <div className="error-state">
              {'Invalid equation! Only allowed operators are: *, ^, /, +, -'}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="next-function" className="form-label">
            Next function
          </label>
          <Select
            options={functionsOptions}
            className="next-function-select"
            components={{ IndicatorSeparator: () => null }}
            value={{ label: `Function ${functionObj.nextFunctionIndex}`, value: functionObj.nextFunctionIndex }}
            isDisabled={true}
          />
        </div>
      </div>
      <div className="function-footer">
        <div className="function-footer-item">
          <Circle ref={inputCircleRef} />
          input
        </div>
        <div className="function-footer-item">
          output
          <Circle ref={outputCircleRef} />
        </div>
      </div>
    </div>
  );
};

export default Function;
