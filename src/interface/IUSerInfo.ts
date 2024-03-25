export interface IUserInfo{
    username : string,
    password: string
}

export interface IUserSignUp{
    full_name: string,
    email: string,
    phone_number: string,
    password: string,
    gender: string,
    role_id: number,
}

export interface INewPassword{
    account: string,
    newPassword: string,
}