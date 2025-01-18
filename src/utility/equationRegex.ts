const validOperatorsRegex = /^[0-9x\s+\-*/^()]*$/;

export const validateEquation = (equation: string): boolean => {
  return validOperatorsRegex.test(equation);
};