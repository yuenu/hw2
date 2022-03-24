/**
 * Convert the two string to number, and return rate of thier value
 *
 * @param num1 string - Numerator 分子
 * @param num2 string
 * @returns num1 / (num1 + num2)
 * 
 * 
 */
export const ConverToNumberAndCalculateRate = (
  num1: string,
  num2: string
): number => {
  if (num1 === '0' && num2 === '0') return 1
  const n1 = parseInt(num1)
  const n2 = parseInt(num2)
  return (n1 / (n1 + n2)) * 100
}
