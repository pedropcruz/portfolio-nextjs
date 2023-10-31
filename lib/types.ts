// Authentication API

interface IUser {
  email: string
  firstName: string
  lastName: string
  password: string
}

interface IUserResponse {
  status: string
  data: {
    user: IUser
  }
}

interface IUserLogin {
  email: string
  password: string
}

interface IUserLoginResponse {
  status: string
  token: string
}
