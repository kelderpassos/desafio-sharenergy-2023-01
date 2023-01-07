export type RandomUserType = {
  picture: Record<string, string>,
  name: Record<string, string>,
  email: string,
  login: Record<string, string>,
  dob: Record<string, string>,
}

export type UserFromDB = {
  name?: string,
  email: string,
  phoneNumber: string,
  address: string,
  cpf: string,
  _id?: string,
}