import { mockUserData } from '../mockObj/userParams';

export function verificationUser(email: string, password: string): boolean {
  if (email === mockUserData.email && password === mockUserData.password) {
    return true;
  } else {
    return false;
  }
}
