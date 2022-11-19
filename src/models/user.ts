export interface User {
  id?: string | undefined;
  username?: string;
  displayName: string;
  email?: string;
  token?: string;
  image?: string;
  role?: string;
}

export interface UserFormValues {
  email: string;
  password: string;
  username: string;
}
