export interface UserRegisterCredentials {
  firstName: String
  secondName?: String
  lastName: String
  gender: String
  email: String
  password: String
  password2: String
}

export interface UserLoginCredentials {
  email: String
  password: String
}

export interface ErrorsRegisterAndLoginFromServer {
  firstName?: String
  lastName?: String
  gender?: String
  email?: String
  password?: String
  password2?: String
  wrongCredentials?: String
  message?: String
}
