<template>
	<!-- For creating new task -->
	<div class="add-task">
		<h3>Add new task</h3>
		<form @submit.prevent="createTask">
			<label class="label-wrap h-my-sm">
				Description
				<input
					v-model="description"
					class="input"
					type="text"
					required
				>
			</label>

			<button type="submit" class="button">Create</button>
		</form>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
	name: 'add-task',

	data: () => ({
		description: ''
	}),

	methods: {
		...mapActions({
			_createTask: 'task/createTask'
		}),

		async createTask() {
			await this._createTask(this.description);
		}
	}
});
</script>

<style scoped>

.add-task {
	width: 150px;
	height: 50px;
}

</style>