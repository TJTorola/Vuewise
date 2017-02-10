<template>
	<svg
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		class="icon">
		<path :d="pathData" />
	</svg>
</template>

<script>
import FA from '~assets/svg/fa.js';

export default {
	props: ['i'],

	computed: {
		pathData() {
			return FA[this.i];
		}
	}
}
</script>

<style scoped>
svg {
	height: 32px;
}
</style>
