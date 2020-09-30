import { Task } from '@/models/Task';
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

}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}