export const bodyMock = {
  name: 'User',
  email: 'user@email.com',
  phoneNumber: '99987654321',
  address: 'street',
  cpf: '99999999999',
};

export const userMock = {
  name: 'User',
  email: 'user@email.com',
  phoneNumber: '99987654321',
  address: 'street',
  cpf: '99999999999',
  _id: '63b375808629a9d599f7e6db',
  __v: 0,
};

export const invalidBodyMock = {
  name: '',
  email: '',
  phoneNumber: '0',
  address: '',
  cpf: '0',
  _id: '',
  __v: 0,
};

export const allUsersMock = [
  {
    name: 'User',
    email: 'user@email.com',
    phoneNumber: '99987654321',
    address: 'street',
    cpf: '99999999999',
    _id: '63b375808629a9d599f7e6db',
    __v: 0,
  },
  {
    name: 'Usuário',
    email: 'usuario@email.com',
    phoneNumber: '99987654321',
    address: 'rua',
    cpf: '99999999999',
    _id: '63b375808629a9d599f7e6db',
    __v: 0,
  },
];
