import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const getValidationErrors = (error: ValidationError): Errors => {
  const ValidationErrors: Errors = {};

  error.inner.forEach(({ path, message }) => {
    if (path && message) {
      ValidationErrors[path] = message;
    }
  });

  return ValidationErrors;
};

export { getValidationErrors };
