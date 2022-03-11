import base from './base';

const overrides = {
  name: 'division',
  color: 'red.500',
  firstLabel: 'Max for the dividend',
  secondLabel: 'Max for the divisor',
  operator: '/',
  getAnswer: (first, second) => {
    const remainder = first % second;
    const quotient = Math.floor(first / second);
    return `q: ${quotient},  r: ${remainder}`;
  },
};

export default base(overrides);
