import { model, Schema, isValidObjectId } from 'mongoose';
import { SpecificError } from '../helpers/SpecificError';
import { ModelInterface } from '../interfaces/api/model.interface';

abstract class MongoModel<T> implements ModelInterface<T, T> {
  protected _model;

  constructor(alias: string, schema: Schema) {
    this._model = model(alias, schema);
  }

  // eslint-disable-next-line class-methods-use-this
  private checkId = (id: string) => {
    if (!isValidObjectId(id)) throw SpecificError.invalidParameter();
  };

  public create = async (obj: T)
  : Promise<T> => this._model.create({ ...obj }) as T;

  public readAll = async (): Promise<T[]> => this._model.find();

  public readOne = async (id: string): Promise<T | null> => {
    this.checkId(id);
    return this._model.findOne({ id });
  };

  public update = async (id: string, obj: Partial<T>): Promise<T | null> => {
    this.checkId(id);
    return this._model.findByIdAndUpdate(id, obj);
  };

  public delete = async (id: string): Promise<T | null> => {
    this.checkId(id);
    return this._model.findByIdAndDelete(id);
  };
}

export { MongoModel };
