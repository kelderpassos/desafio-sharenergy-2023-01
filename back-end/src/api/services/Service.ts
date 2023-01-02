import { ZodType } from 'zod';
import { ServiceInterface } from '../interfaces/api/service.interface';
import { ModelInterface } from '../interfaces/api/model.interface';

abstract class Service<T> implements ServiceInterface<T, T> {
  constructor(protected model: ModelInterface<T, T>, private zodSchema: ZodType<T>) {}

  create = async (obj: T): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };

  readAll = async (): Promise<T[]> => {
    throw new Error('Method not implemented.');
  };
  readOne = async (id: string): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };
  update = async (id: string, obj: Partial<T>): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };
  delete = async (id: string): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };
}

export { Service };
