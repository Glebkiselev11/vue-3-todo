<template>
	<!-- Page of registration -->
	<div class="wrap">

		<form class="register-form" @submit.prevent="register">
			<h1 class="h-mb-md">Please register</h1>

			<label class="label-wrap h-my-sm">
				Username
				<input
					v-model="username"
					class="input"
				>
			</label>

			<label class="label-wrap h-my-sm">
				Password
				<input
					v-model="password"
					class="input"
				>
			</label>

			<label class="label-wrap h-my-sm">
				Repeat password
				<input
					v-model="repeatPassword"
					class="input"
				>
			</label>


			<button type="submit" class="button h-mt-md">Register</button>

		</form>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Register',

	data: () => ({
		username: '',
		password: '',
		repeatPassword: ''
	}),

	methods: {
		register() {
			console.log(this.username, this.password, this.repeatPassword);
		}
	}

});
</script>

<style scoped>

.wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.register-form {
	min-height: 20rem;
}

</style>
