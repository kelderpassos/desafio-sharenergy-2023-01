import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { UserModel } from '../../../api/models/users.model';
import { UserService } from '../../../api/services/user.service';
import { SpecificError } from '../../../api/helpers/SpecificError';
import {
  allUsersMock, bodyMock, invalidBodyMock, userMock,
} from '../../mocks/users.mocks';

describe('User Service', () => {
  const userModel = new UserModel();
  const userService = new UserService(userModel);

  const VALID_ID = '63b375808629a9d599f7e6db';
  const INVALID_ID = 'invalid-id';
  const NON_EXISTING_ID = '63b375808629a9d599f7e6aa';

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      sinon.stub(userModel, 'create').resolves(userMock);

      const newUser = await userService.create(bodyMock);

      expect(newUser).to.be.an('object');
      expect(newUser).to.be.deep.equal(userMock);
      expect(newUser).to.contain.keys('_id');
    });

    it('should throw an error if the incoming body is invalid', async () => {
      sinon.stub(userModel, 'readOne').resolves(userMock);

      try {
        await userService.create(invalidBodyMock);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(ZodError);
      }
    });
  });

  describe('readAll', () => {
    it('should return all users from database', async () => {
      sinon.stub(userModel, 'readAll').resolves(allUsersMock);

      const users = await userService.readAll();

      expect(users).to.be.an('array');
      expect(users).to.be.deep.equal(allUsersMock);
      expect(users).to.have.length(2);
    });
  });

  describe('readOne', () => {
    it('should return a user from database', async () => {
      sinon.stub(userModel, 'readOne').resolves(userMock);

      const user = await userService.readOne(VALID_ID);

      expect(user).to.be.an('object');
      expect(user).to.be.deep.equal(userMock);
    });

    it('should throw an error if the given id doesn\'t exist', async () => {
      sinon.stub(userModel, 'readOne').resolves(null);

      try {
        await userService.readOne(NON_EXISTING_ID);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Object not found');
      }
    });
  });

  describe('update', () => {
    it('should update a user data in database', async () => {
      sinon.stub(userModel, 'update').resolves(userMock);

      const users = await userService.update(VALID_ID, bodyMock);

      expect(users).to.be.an('object');
      expect(users).to.be.deep.equal(userMock);
    });

    it('should throw an error if id is incorect', async () => {
      sinon.stub(userModel, 'update').resolves(null);

      try {
        await userService.update(VALID_ID, invalidBodyMock);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(ZodError);
      }
    });

    it('should throw an error if the given id doesn\'t exist', async () => {
      sinon.stub(userModel, 'update').resolves(null);

      try {
        await userService.update(NON_EXISTING_ID, bodyMock);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Object not found');
      }
    });
  });

  describe('delete', () => {
    it('should delete a user in database', async () => {
      sinon.stub(userModel, 'delete').resolves(userMock);

      const users = await userService.delete(VALID_ID);

      expect(users).to.be.an('object');
      expect(users).to.be.deep.equal(userMock);
    });

    it('should throw an error if the given id doesn\'t exist', async () => {
      sinon.stub(userModel, 'delete').resolves(null);

      try {
        await userService.delete(NON_EXISTING_ID);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Object not found');
      }
    });
  });
});
