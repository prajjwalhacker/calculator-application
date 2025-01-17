import './function.css';
import dragAndDrag from '../../../src/assets/images/drag-and-drop.svg';
import Circle from '../Circle/Circle';
import { useEffect, useRef, useState } from 'react';
import Select from "react-select";

const Function = ({ functionObj, setFunctionArr }) => {


  const inputCircleRef = useRef<any>(null);
  const outputCircleRef = useRef<any>(null);





  const onChangeEquation = (value) => {
       setFunctionArr((prev) => {
           const newFunctionArr = [...prev];
           const id = functionObj.id;
           const index = newFunctionArr.findIndex((item) => item.id === id);
           newFunctionArr[index].equation = value;
           return newFunctionArr;
       })
  }



  const options = [
    { value: 1, label: "Function 1" },
    { value: 2, label: "Function 2" },
    { value: 3, label: "Function 3" },
    { value: 4, label: "Function 4" },
    { value: 5, label: "Function 5" },
  ];


  useEffect(() => {
      if (inputCircleRef.current) {
        const rect = inputCircleRef.current.getBoundingClientRect();

        const index = functionObj.id;
        setFunctionArr((prev: any) => {
           const newFunctionArr = [...prev];
           const reqIndex = newFunctionArr.findIndex((item) => item.id === index);
           newFunctionArr[reqIndex].inputPosition.x = rect.x;
           newFunctionArr[reqIndex].inputPosition.y = rect.y;
           return newFunctionArr;
        })
      }
      if (outputCircleRef.current) {
        const rect = outputCircleRef.current.getBoundingClientRect();
        console.log("Circle Position from Wrapper:", rect);
        const index = functionObj.id;
        setFunctionArr((prev: any) => {
          const newFunctionArr = [...prev];
          const reqIndex = newFunctionArr.findIndex((item) => item.id === index);
          newFunctionArr[reqIndex].outputPosition.x = rect.x;
          newFunctionArr[reqIndex].outputPosition.y = rect.y;
          return newFunctionArr;
       })
      }
  }, []);



  return (
    <div className="function-container">
        <div className='function-header'>
          <img src={dragAndDrag} alt='drag-and-drop'/>
          <div className='function-title'>
             Function: 1
          </div>
        </div>
        <div className='form-container'>
           <div className='form-group'>
             <label htmlFor="equation" className="form-label">Equation</label>   
             <div className='form-input'>
                <input value={functionObj.equation || ''} onChange={(e) => {
                    onChangeEquation(e.target.value);
                }}/>
             </div>
             {functionObj?.isError && <div className='error-state'>{'Invalid equation! Only allowed operators are: *, ^, /, +, -'}</div>} 
           </div>
           <div className='form-group'>
             <label htmlFor="next-function" className="form-label">Next function</label>   
                <Select options={options} 
                className="next-function-select"
                components={{
                  IndicatorSeparator: () => null
                }}
                value={{ label: `Function ${functionObj.nextFunctionIndex}`, value: functionObj.nextFunctionIndex }}
                isDisabled={true}
                /> 
           </div>
        </div>  
        <div className='function-footer'>
           <div className='function-footer-item'>
             <Circle ref={inputCircleRef}/>  
              input
           </div>
           <div className='function-footer-item'>
             output
             <Circle ref={outputCircleRef}/> 
           </div>
        </div>
    </div>
  )
}

export default Function