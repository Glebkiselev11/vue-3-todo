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
					type="text"
					required
				>
			</label>

			<label class="label-wrap h-my-sm">
				Email
				<input
					v-model="email"
					class="input"
					required
					type="email"
				>
			</label>

			<label class="label-wrap h-my-sm">
				Age
				<input
					v-model="age"
					class="input"
					required
					type="number"
				>
			</label>



			<label class="label-wrap h-my-sm">
				Password
				<input
					v-model="password"
					class="input"
					required
					type="password"
				>
			</label>

			<label class="label-wrap h-my-sm">
				Repeat password
				<input
					v-model="repeatPassword"
					class="input"
					required
					type="password"
				>
			</label>

			<p v-text="error" style="color: red"/>

			<button type="submit" class="button h-mt-md">Register</button>

		</form>

	</div>
</template>

<script lang="ts">

import { POST } from '@/http-config';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Register',

	data: () => ({
		username: '',
		email: '',
		age: 16,
		password: '',
		repeatPassword: '',

		error: null as null | string
	}),

	methods: {
		async register() {
			if (this.password !== this.repeatPassword) {
				this.error = 'Passwords must match';
				return;
			}

			const { token } = await POST('/user/register', {
				name: this.username,
				email: this.email,
				password: this.password,
				age: this.age
			});

			// todo нужно бы прикрутить vuex и делать через него запросы
			localStorage.setItem('authToken', token);
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
