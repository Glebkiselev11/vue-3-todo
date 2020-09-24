import { User } from '@/models/User';

interface UserState {
	user: User | null;
}

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

export default {
	state,
	getters,
	mutations
}