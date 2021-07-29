import { validate } from 'uuid';

const isValidBarCode = (id: string): boolean => {
  return validate(id);
};

export { isValidBarCode };
