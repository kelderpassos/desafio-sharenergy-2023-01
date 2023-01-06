import { expect } from 'chai';
import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { UserModel } from '../../../api/models/users.model';
import { allUsersMock, bodyMock, userMock } from '../../mocks/users.mocks';
import { SpecificError } from '../../../api/helpers/SpecificError';

describe('Users model', () => {
  const userModel = new UserModel();

  const validId = '63b375808629a9d599f7e6db';
  const INVALID_ID = 'invalid-id';

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      sinon.stub(Model, 'create').resolves(userMock);

      const newUser = await userModel.create(bodyMock);

      expect(newUser).to.be.an('object');
      expect(newUser).to.be.deep.equal(userMock);
      expect(newUser).to.contain.keys('_id');
    });
  });

  describe('readAll', () => {
    it('should return all users from database', async () => {
      sinon.stub(Model, 'find').resolves(allUsersMock);

      const users = await userModel.readAll();

      expect(users).to.be.an('array');
      expect(users).to.be.deep.equal(allUsersMock);
      expect(users).to.have.length(2);
    });
  });

  describe('readOne', () => {
    it('should return a user from database', async () => {
      sinon.stub(Model, 'findOne').resolves(userMock);

      const user = await userModel.readOne(validId);

      expect(user).to.be.an('object');
      expect(user).to.be.deep.equal(userMock);
    });

    it('should throw an error if id is incorect', async () => {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await userModel.readOne(INVALID_ID);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Id must have 24 hexadecimal characters');
      }
    });
  });

  describe('update', () => {
    it('should update a user data in database', async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(userMock);

      const users = await userModel.update(validId, bodyMock);

      expect(users).to.be.an('object');
      expect(users).to.be.deep.equal(userMock);
    });

    it('should throw an error if id is incorect', async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await userModel.update(INVALID_ID, bodyMock);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Id must have 24 hexadecimal characters');
      }
    });
  });

  describe('delete', () => {
    it('should delete a user in database', async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(userMock);

      const users = await userModel.delete(validId);

      expect(users).to.be.an('object');
      expect(users).to.be.deep.equal(userMock);
    });

    it('should throw an error if id is incorect', async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);

      try {
        await userModel.delete(INVALID_ID);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(SpecificError);
        expect(error.message).to.be.equal('Id must have 24 hexadecimal characters');
      }
    });
  });
});
