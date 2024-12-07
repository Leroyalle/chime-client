import { TAuthTokens } from '../../@types/auth';
import { User } from '../../@types/dto';
import { ApiRouter } from './constants';
import { instance } from './instance';

type TRegister = {
  email: string;
  password: string;
  name: string;
};

export const register = async (userData: TRegister): Promise<Omit<User, 'password'>> => {
  return (await instance.post<Omit<User, 'password'>>(`/register`, userData)).data;
};

export const login = async (userData: Omit<TRegister, 'name'>): Promise<TAuthTokens> => {
  return (await instance.post<TAuthTokens>(`/login`, userData)).data;
};

export const current = async () => {
  return (await instance.get<Omit<User, 'password'>>(`/current`)).data;
};

export const getUserById = async (id: string) => {
  return (await instance.get<Omit<User, 'password'>>(`${ApiRouter.USER}/${id}`)).data;
};

export const updateUser = async ({ userData, id }: { userData: FormData; id: string }) => {
  return (await instance.put<Omit<User, 'password'>>(`${ApiRouter.USER}/${id}`, userData)).data;
};

export const refreshAccessToken = async (refreshToken: string): Promise<TAuthTokens | null> => {
  return (await instance.post<TAuthTokens | null>(`${ApiRouter.REFRESH}`, { refreshToken })).data;
};
