import { UserState } from './user/types';
import { TaskState } from './task/types';

export interface RootState {
	user: UserState,
	task: TaskState
}