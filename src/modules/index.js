import multiplication from './multiplication';
import division from './division';

export const getModule = name => {
  switch (name) {
    case 'multiplication':
      return multiplication;
    case 'division':
      return division;
    default:
      return null;
  }
};

export const getAllModuleNames = () => {
  return ['multiplication', 'division'];
};
