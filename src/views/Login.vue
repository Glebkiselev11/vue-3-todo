<template>
	<div class="wrap align-center">
		<form class="login-form" @submit.prevent="login">
			<h1 class="h-mb-md">Login</h1>

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
				Password
				<input
					v-model="password"
					class="input"
					required
					type="password"
				>
			</label>

			<p v-text="error" style="color: red"/>

			<button type="submit" class="button h-mt-md">Login</button>

		</form>


	</div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'login',

	data: () => ({
		email: '',
		password: '',
		error: ''
	}),

	methods: {
		...mapActions({
			_login: 'user/login'
		}),

		async login() {
			const isCorrect = await this._login({
				email: this.email,
				password: this.password
			});

			if (isCorrect) {
				console.log('Password fine, come in');
			} else {
				this.error = 'Email or password incorrect';
			}

		}
	}

});
</script>
