/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { UserModel } from '../../../api/models/users.model';
import { allUsersMock, bodyMock, userMock } from '../../mocks/users.mocks';
import { SpecificError } from '../../../api/helpers/SpecificError';
import { UserController } from '../../../api/controllers/user.controller';
import { UserService } from '../../../api/services/user.service';

describe('User Controller', () => {
  const userModel = new UserModel();
  const userService = new UserService(userModel);
  const userController = new UserController(userService);

  const VALID_ID = '63b375808629a9d599f7e6db';
  const MESSAGE_UPON_DELETION = { message: 'User deleted from database successfully' };

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {
    it('should return the correct status code and the created user data', async () => {
      sinon.stub(userService, 'create').resolves(userMock);

      req.body = bodyMock;

      await userController.create(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(userMock)).to.be.true;
    });

    it('should throw an error if an empty body is sent', async () => {
      sinon.stub(userService, 'create').resolves(null);

      req.body = false;

      try {
        await userController.create(req, res);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Empty body is not allowed');
      }
    });
  });

  describe('readAll', () => {
    it('should return the correct status code and all users from database', async () => {
      sinon.stub(userService, 'readAll').resolves(allUsersMock);

      await userController.readAll(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(allUsersMock)).to.be.true;
    });
  });

  describe('readOne', () => {
    it('should return the correct status code and one user from database', async () => {
      sinon.stub(userService, 'readOne').resolves(userMock);

      req.params = { id: VALID_ID };

      await userController.readOne(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(userMock)).to.be.true;
    });

    it('should throw an error if no id is provided', async () => {
      sinon.stub(userService, 'readOne').resolves(null);

      req.params = { id: '' };

      try {
        await userController.readOne(req, res);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('An id is necessary');
      }
    });
  });

  describe('update', () => {
    it('should return the correct status code and one user from database', async () => {
      sinon.stub(userService, 'update').resolves(userMock);

      req.body = bodyMock;
      req.params = { id: VALID_ID };

      await userController.update(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(userMock)).to.be.true;
    });

    it('should throw an error if no id is provided', async () => {
      sinon.stub(userService, 'update').resolves(null);

      req.params = { id: '' };

      try {
        await userController.update(req, res);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Id or body are not present');
      }
    });
  });

  describe('delete', () => {
    it('should return the correct status code and delete a user from database', async () => {
      sinon.stub(userService, 'delete').resolves(userMock);

      req.params = { id: VALID_ID };

      await userController.delete(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(204)).to.be.true;
      expect(jsonStub.calledWith(MESSAGE_UPON_DELETION)).to.be.true;
    });

    it('should throw an error if no id is provided', async () => {
      sinon.stub(userService, 'delete').resolves(null);

      req.params = { id: '' };

      try {
        await userController.delete(req, res);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('An id is necessary');
      }
    });
  });
});
