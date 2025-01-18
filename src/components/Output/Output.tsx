import './output.css';
import Circle from '../Circle/Circle';
import { useEffect, useRef, useState } from 'react';

interface OutputProps {
  setOutputPosition: (position: { x: number; y: number }) => void;
  outputValue: string | number;
}

const Output: React.FC<OutputProps> = ({ setOutputPosition, outputValue }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [output, setOutput] = useState<string | number>('');

  const updatePositions = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOutputPosition({ x: rect.x, y: rect.y });
    }
  }

  useEffect(() => {
    updatePositions();
  }, [setOutputPosition]);


  useEffect(() => {
    setOutput(outputValue);
  }, [outputValue]);

  return (
    <div className="output-container">
      <Circle ref={ref} />
      <input className="inner-output-main" value={output || ''} readOnly />
    </div>
  );
};

export default Output;
