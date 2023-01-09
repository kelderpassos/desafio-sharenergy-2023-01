/* eslint-disable class-methods-use-this */
import { model, Schema, isValidObjectId } from 'mongoose';
import { SpecificError } from '../helpers/SpecificError';
import { ModelInterface } from '../interfaces/api/model.interface';

abstract class MongoModel<T> implements ModelInterface<T, T> {
  protected _model;

  constructor(alias: string, schema: Schema, data: T[]) {
    this._model = model(alias, schema);
    this.seedDB(data);
  }

  /* This method is used only in production to test the api.
     This kind of setup is quite dangerous because deleteMany doesn't have any parameters */
  private seedDB = async (collection: T[]): Promise<void> => {
    await this._model.deleteMany({});
    await this._model.insertMany(collection);
  };

  private checkId = (id: string) => {
    if (!isValidObjectId(id)) throw SpecificError.invalidParameter();
  };

  public create = async (obj: T)
  : Promise<T> => this._model.create({ ...obj }) as T;

  public readAll = async (): Promise<T[]> => this._model.find();

  public readOne = async (_id: string): Promise<T | null> => {
    this.checkId(_id);

    return this._model.findById({ _id });
  };

  public update = async (_id: string, obj: Partial<T>): Promise<T | null> => {
    this.checkId(_id);
    return this._model.findByIdAndUpdate(_id, obj, { new: true });
  };

  public delete = async (_id: string): Promise<T | null> => {
    this.checkId(_id);
    return this._model.findByIdAndDelete(_id);
  };
}

export { MongoModel };
