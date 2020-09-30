import { createStore } from 'vuex';

// Modules
import user from './user';
import task from './task';

export default createStore({
	modules: { user, task }
});
