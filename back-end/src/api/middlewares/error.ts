import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { SpecificError } from '../helpers/SpecificError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err: Error | ZodError, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  if (err instanceof SpecificError) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json({ message: 'Internal Server Error', err });
};

export { errorHandler };
