import './input.css';
import Circle from '../Circle/Circle';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface InputProps {
  setInputPosition: (position: { x: number; y: number }) => void;
  inputValue: number;
  setInputValue: Dispatch<SetStateAction<number>>;
}

const Input: React.FC<InputProps> = ({ setInputPosition, inputValue, setInputValue }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const updatePositions = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setInputPosition({ x: rect.x, y: rect.y });
    }
  }

  useEffect(() => {
     updatePositions();
  }, [setInputPosition]);

  useEffect(() => {
    window.addEventListener("resize", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <div className="input-container">
      <input
        className="inner-input-main"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <Circle ref={ref} />
    </div>
  );
};

export default Input;
