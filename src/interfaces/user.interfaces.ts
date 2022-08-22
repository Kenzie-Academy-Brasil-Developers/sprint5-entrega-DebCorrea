export interface IUserRequest {
  name: string;
  email: string;
  userPassword: string;
  age: number;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUserSchema {
  name: string;
  email: string;
  password: string;
  age: number;
}
