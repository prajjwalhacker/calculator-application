import './output.css';
import Circle from '../Circle/Circle';
import { useEffect, useRef, useState } from 'react';

const Output = ({ setOutputPosition,  outputValue }) => {
  const ref = useRef<any>({});
  const [output, setOutput] = useState('');

  useEffect(() => {
     if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOutputPosition({ x: rect.x, y: rect.y }); 
     }
  },[]);

  useEffect(() => {
     setOutput(outputValue)
  },[outputValue])

  return (
    <div className='output-container'>
      <Circle ref={ref}/>  
      <input className='inner-output-main' value={output || ''}/>
    </div>
  )
}

export default Output;