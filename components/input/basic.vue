<template>
	<div class="wrapper">
		<input type="text"
			:class="icon ? 'has-icon' : ''"
			v-model="value"
			v-if="type === 'text'" />
		<input type="password"
			:class="icon ? 'has-icon' : ''"
			v-model="value"
			v-if="type === 'password'" />

		<icon :i="icon" v-if="icon"/>

		<label :class="{ filled }">
			{{ label }}
		</label>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	border: 1px solid #444;
	border-radius: 5px;
	padding: 3px;
	height: 45px;
	cursor: text;
}

.icon {
	height: 20px;
	position: absolute;
	right: 10px;
	top: 10px;
	pointer-events: none;
}

input {
	flex-grow: 1;
	border: none;
	background: transparent;
	position: absolute;
	font-size: 15px;
	top: 0;
	left: 0;
	padding-left: 10px;
	padding-top: 10px;
	padding-right: 10px;
	width: 100%;
	height: 100%;
}

input.has-icon {
	padding-right: 40px;
}

input:focus {
	outline: none;
}

label {
	position: absolute;
	top: 12px;
	left: 10px;
	transition: 0.2s ease all;
	pointer-events: none;
}

input:focus ~ label, label.filled {
	top: 5px;
	font-size: 10px;
}
</style>

<script>
import Icon from '~/components/icon.vue';

export default {
	components: {
		Icon
	},

	props: {
		label: {
			type: String,
			required: true
		},

		type: {
			type: String,
			default: 'text'
		},

		icon: {
			type: String
		}
	},

	data: () => ({
		value: ''
	}),

	computed: {
		filled() {
			return this.value !== '';
		}
	}
}
</script>
