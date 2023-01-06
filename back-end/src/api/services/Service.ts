import { ZodType } from 'zod';
import { ServiceInterface } from '../interfaces/api/service.interface';
import { ModelInterface } from '../interfaces/api/model.interface';
import { SpecificError } from '../helpers/SpecificError';

abstract class Service<T> implements ServiceInterface<T, T> {
  constructor(protected _model: ModelInterface<T, T>, private _zodSchema: ZodType<T>) {}

  private zodParseValidation = (obj: unknown) => {
    const parsed = this._zodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return parsed.data;
  };

  public create = async (obj: T): Promise<T | null> => {
    const parsedData = this.zodParseValidation(obj);
    return this._model.create(parsedData);
  };

  public readAll = async (): Promise<T[]> => this._model.readAll();

  public readOne = async (id: string): Promise<T | null> => {
    const specificObject = await this._model.readOne(id);

    if (!specificObject) throw SpecificError.notFound();

    return specificObject;
  };

  public update = async (id: string, obj: Partial<T>): Promise<T | null> => {
    const parsedData = this.zodParseValidation(obj);

    const updatedUser = await this._model.update(id, parsedData);

    if (!updatedUser) throw SpecificError.notFound();

    return updatedUser;
  };

  public delete = async (id: string): Promise<T | null> => {
    const deletedCar = await this._model.delete(id);

    if (!deletedCar) throw SpecificError.notFound();

    return deletedCar;
  };
}

export { Service };
