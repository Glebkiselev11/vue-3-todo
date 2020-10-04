<template>
	<div class="main-layout">
		<nav-bar/>

		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
	name: 'main-layout',
	components: {
		NavBar
	}
})
</script>

<style scoped>
.main-layout {
	height: 100vh;
  background: rgb(219, 236, 255);
}
</style>
