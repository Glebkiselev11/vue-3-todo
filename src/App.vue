<template>
	<component :is="layout">
		<router-view/>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default defineComponent({
	name: 'app',

	components: {
		EmptyLayout,
		MainLayout
	},

	computed: {
		layout() {
			return this.$route.meta.layout + '-layout';
		}
	},

});
</script>


<style>

* {
	font-family: 'Courier New', Courier, monospace;
	margin: 0;
	padding: 0;
}

.wrap {
	width: 100%;
	display: flex;
	justify-content: center;
}

.align-center {
	display: flex;
	align-items: center;
}

.input {
	height: 20px;
	padding: 4px;
}

/* If input have label as wrap */
.label-wrap {
	display: flex;
	flex-direction: column;
}

.button {
	padding: 4px 8px;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
}

.fit {
	width: 100%;
	height: 100%;
}

.full-width {
	width: 100%;
}

.full-height {
	height: 100%;
}


.h-my-sm {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.h-mx-sm {
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}

.h-mb-md {
	margin-bottom: 1rem;
}

.h-mt-md {
	margin-top: 1rem;
}

</style>