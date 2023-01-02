import { RequestHandler } from 'express';
import { SpecificError } from '../helpers/SpecificError';
import { ControllerInterface } from '../interfaces/api/controller.interface';
import { ServiceInterface } from '../interfaces/api/service.interface';

class Controler<T> implements ControllerInterface {
  constructor(protected _service: ServiceInterface<T, T>) {}

  create: RequestHandler = async (req, res) => {
    const { body } = req;

    if (!body) throw SpecificError.invalidParameter('Empty body is not allowed');

    const newObject = await this._service.create({ ...body });

    return res.status(201).json(newObject);
  };

  readAll: RequestHandler = async (req, res) => {
    const allObjects = await this._service.readAll();
    return res.status(200).json(allObjects);
  };

  readOne: RequestHandler = async (req, res) => {
    const { id } = req.params;

    if (!id) throw SpecificError.invalidParameter('An id is necessary');

    const specificObject = await this._service.readOne(id);

    return res.status(200).json(specificObject);
  };

  update: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if (!id || !body) throw SpecificError.invalidParameter('Id or body are not present');

    const updatedObject = await this._service.update(id, body);

    return res.status(200).json(updatedObject);
  };

  delete: RequestHandler = async (req, res) => {
    const { id } = req.params;

    if (!id) throw SpecificError.invalidParameter('An id is necessary');

    await this._service.delete(id);

    return res.status(204).end();
  };
}

export { Controler };
