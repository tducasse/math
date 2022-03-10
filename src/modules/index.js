import multiplication from './multiplication';
import division from './division';

export const moduleNames = ['multiplication', 'division'];

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

export const getConfig = name => {
  const module = getModule(name);
  if (module) {
    return module.config;
  }
  return null;
};
