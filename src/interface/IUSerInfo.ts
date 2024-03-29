export interface IUserInfo{
    username : string,
    password: string,
    roleID: number,
}

export interface IUserSignUp {
    full_name: string,
    email: string,
    phone_number: string,
    confirm_password: string,
    password: string,
    gender: string,
    role_id: number
  }
  

export interface INewPassword{
    account: string,
    newPassword: string,
}

export interface LoginResponse {
    token: string;
    role_id: number;
    full_name: string;
  }