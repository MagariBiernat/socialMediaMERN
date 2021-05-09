export interface UserRegisterCredentials {
  firstName: string
  secondName?: string
  lastName: string
  gender: string
  email: string
  password: string
  password2: string
}

export interface UserLoginCredentials {
  email: string
  password: string
}

export type IUSER_LOADING = boolean

export type ISET_CURRENT_USER = {
  id?: string
  email?: string
  iat?: number
  exp?: number
}

export interface ErrorsRegisterAndLoginFromServer {
  firstName?: string
  lastName?: string
  gender?: string
  email?: string
  password?: string
  password2?: string
  wrongCredentials?: string
  message?: string
}

export interface IComments {
  content: string
  likes: number
  commentedBy: {
    firstName: string
    secondName: string
    lastName: string
    _id: string
  }
  likedBy: Array<{
    firstName: string
    secondName: string
    lastName: string
    _id: string
  }>
}

export interface ILikedPost {
  postId: string
  likedBy: string
}

export interface INewPost {
  title: string
  content?: string
  postedBy: string
  imageUrl?: null //todo: add image
}

export interface IDeletePost {
  postId: string
  usersId: string
}

export interface IGetPosts {
  postsCount: number
  posts: [IPost]
}

export interface IPost {
  _id: string
  title: string
  content?: string
  postedBy: {
    firstName: string
    secondName: string
    lastName: string
    _id: string
  }
  likes: number
  likedBy: Array<{
    firstName?: string
    secondName?: string
    lastName?: string
    _id: string
  }>
  dateCreated: string
  comments: Array<IComments>
}

export interface IUserData {
  firstName: string
  secondName?: string
  lastName: string
  nickname?: string
  gender: string
  email: string
  createdAt: string
}

export interface IAuthState {
  isAuthenticated: boolean
  user: ISET_CURRENT_USER
  loading: boolean
  registered: boolean
}
