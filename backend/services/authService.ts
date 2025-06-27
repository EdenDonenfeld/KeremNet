import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { users, User } from '../api/data';

type AuthenticationResponse = {
  status: number;
  data: {
    message: string;
    user?: User;
  }
}

const SALT_ROUNDS = 10;

export const register = async (username: string, password: string): Promise<AuthenticationResponse> => {
  const existUser = users.find(user => user.username === username);
  if (existUser) {
    return { status: 400, data: { message: 'Username already exists' } };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser: User = {
      id: uuidv4(),
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return { status: 200, data: { message: 'User registered successfully', user: { ...newUser } } };
  } catch (error) {
    return { status: 500, data: { message: 'Could not register user' } };
  }
};

export const login = async (username: string, password: string): Promise<AuthenticationResponse> => {
  const user = users.find(user => user.username === username);
  if (!user) {
    return { status: 400, data: { message: 'Invalid username or password' } };
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { status: 400, data: { message: 'Invalid username or password' } };
    }
    return { status: 200, data: { message: 'Login successful', user: { ...user } } };
  } catch (error) {
    return { status: 500, data: { message: 'Could not log in' } };
  }
};
