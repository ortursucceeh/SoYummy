import { UserType } from './User';

export interface ILoginInfo {
  accessToken: string;
  refreshToken: string;
  user: UserType;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}
