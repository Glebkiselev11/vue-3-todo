<template>
	<div class="wrap">
		<add-task/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTask from '@/components/AddTask.vue';

export default defineComponent({
	name: 'Home',
	components: {
		AddTask
	},
});
</script>
