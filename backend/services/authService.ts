import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User, UserProps } from '../models/User';


type AuthenticationResponse = {
  status: number;
  data: {
    message: string;
    user?: Pick<UserProps, 'id' | 'username' | 'createdAt'>;
  }
}

const SALT_ROUNDS = 10;

export const register = async (username: string, password: string): Promise<AuthenticationResponse> => {
  const existUser = await User.findOne({ username });
  if (existUser) {
    return { status: 400, data: { message: 'Username already exists' } };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword,
      createdAt: new Date()
    };
    const newUserModel = new User(newUser);
    await newUserModel.save();
    return { status: 200, data: { message: 'User registered successfully', user: { 
      id: newUser.id,
      username: newUser.username,
      createdAt: newUser.createdAt
     } } };
  } catch (error) {
    return { status: 500, data: { message: 'Could not register user' } };
  }
};

export const login = async (username: string, password: string): Promise<AuthenticationResponse> => {
  const user = await User.findOne({ username });
  if (!user) {
    return { status: 400, data: { message: 'Invalid username or password' } };
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { status: 400, data: { message: 'Invalid username or password' } };
    }
    return { status: 200, data: { message: 'Login successful', user: { 
      id: user.id,
      username: user.username,
      createdAt: user.createdAt
     } } };
  } catch (error) {
    return { status: 500, data: { message: 'Could not log in' } };
  }
};
