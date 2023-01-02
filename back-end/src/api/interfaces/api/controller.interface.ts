import { RequestHandler } from 'express';

interface ControllerInterface {
  create: RequestHandler,
  readAll: RequestHandler,
  readOne: RequestHandler,
  update: RequestHandler,
  delete: RequestHandler,
}

export { ControllerInterface };
