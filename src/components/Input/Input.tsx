import './input.css';
import Circle from '../Circle/Circle';
import { useEffect, useRef } from 'react';

interface InputProps {
  setInputPosition: (position: { x: number; y: number }) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ setInputPosition, inputValue, setInputValue }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setInputPosition({ x: rect.x, y: rect.y });
    }
  }, [setInputPosition]);

  return (
    <div className="input-container">
      <input
        className="inner-input-main"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Circle ref={ref} />
    </div>
  );
};

export default Input;
