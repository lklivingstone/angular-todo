export interface LoginInterface {
    username: string;
    password: string;
}

export interface LoginResponseInterface {
    _id: string;
    username: string;
    email: string;
    accessToken: string;
}
