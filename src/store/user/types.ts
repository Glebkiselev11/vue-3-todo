import { User } from '@/models/User';

export interface UserState {
	user: User | null;
};

export interface UserRegistrationPayload {
	name: string;
	email: string;
	password: string;
	age: number
};

export interface UserLoginPayload {
	email: string;
	password: string;
};