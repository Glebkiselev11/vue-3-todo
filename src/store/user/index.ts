import { User } from '@/models/User';
import { ActionContext } from 'vuex';
import { UserState, UserRegistrationPayload, UserLoginPayload } from './types';
import { RootState } from '../types';
import { POST } from '@/http-config';


const state: UserState = {
	user: null
}

const getters = {
	user: (s: UserState) => s.user
}

const mutations = {
	setUser(state: UserState, user: User) {
		state.user = user;
	},
	removeUser(state: UserState) {
		state.user = null;
	}
}

const actions = {
	async register(contex: ActionContext<UserState, RootState>, payload: UserRegistrationPayload) {
		const { token } = await POST(`/user/register`, payload);

		if (token) {
			localStorage.setItem('authToken', token);
		}
	},

	async login(contex: ActionContext<UserState, RootState>, payload: UserLoginPayload) {
		const { token } = await POST(`/user/login`, payload);

		if (token) {
			localStorage.setItem('authToken', token);
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}