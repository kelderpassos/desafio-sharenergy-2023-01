import { model, Schema } from 'mongoose';
import { ModelInterface } from '../entities/model.interface';

abstract class MongoModel<T> implements ModelInterface<T, T> {
  protected _model;

  constructor(alias: string, schema: Schema) {
    this._model = model(alias, schema);
  }

  create = async (obj: T): Promise<T | null> => this._model.create({ ...obj }) as unknown as T;

  readAll = async (): Promise<T[]> => this._model.find();

  readOne = async (id: string): Promise<T | null> => this._model.findOne({ id });

  update = async (id: string, obj: Partial<T>)
  : Promise<T | null> => this._model.findByIdAndUpdate(id, obj);

  delete = async (id: string): Promise<T | null> => this._model.findByIdAndDelete(id);
}

export { MongoModel };
