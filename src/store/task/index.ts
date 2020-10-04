import { POST_WITH_TOKEN } from '@/http-config';
import { Task } from '@/models/Task';
import { ActionContext } from 'vuex';
import { RootState } from '../types';
import { TaskState } from './types';


const state: TaskState = {
	tasks: []
}

const getters = {
	tasks: (s: TaskState) => s.tasks
}

const mutations = {
	setTasks(s: TaskState, tasks: Array<Task>) {
		s.tasks = tasks;
	},

	addNewTask(s: TaskState, task: Task) {
		s.tasks.push(task);
	}
}

const actions = {
	async createTask(contex: ActionContext<TaskState, RootState>, description: string): Promise<boolean> {
		const { success, data } = await POST_WITH_TOKEN(`/task`, { description });
		if (success) {
			contex.commit('addNewTask', data);
		}
		return success;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}