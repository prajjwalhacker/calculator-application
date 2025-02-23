import { v4 as uuidv4 } from 'uuid';

export const functionsData = [
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
    equation: '2*x+4',
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
    equation: 'x^2+20',
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
    equation: 'x-2',
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
    equation: 'x/2',
    output: null,
    input: null,
    inputPosition: { x: 0, y: 0 },
    outputPosition: { x: 0, y: 0 },
    isError: false,
    nextFunctionIndex: 3,
    isFinal: false,
    isStart: false,
  },
];


export const functionsOptions = [
  { value: 1, label: 'Function 1' },
  { value: 2, label: 'Function 2' },
  { value: 3, label: 'Function 3' },
  { value: 4, label: 'Function 4' },
  { value: 5, label: 'Function 5' },
];