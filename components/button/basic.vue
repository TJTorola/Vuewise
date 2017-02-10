<template>
	<div :class="`button no-select ${ color }${ disabled ? ' disabled' : '' }`">
		<Icon v-if="icon" :i="icon" />
		<slot/>
	</div>
</template>

<style scoped>
.button {
	cursor: pointer;
	border: 1px solid black;
	display: inline-block;
	padding: 0 25px;
	border-radius: 7px;
	margin: 5px;
	height: 35px;
	line-height: 35px;
}

.button:hover {
	color: white;
	fill: white;
}

.default {
	color: #3c8dbc;
	fill: #3c8dbc;
	border-color: #3c8dbc;
}

.default:hover {
	background: #3c8dbc;
}

.danger {
	color: #dd4b39;
	fill: #dd4b39;
	border-color: #dd4b39;
}

.danger:hover {
	background: #dd4b39;
}

.disabled, .disabled:hover {
	cursor: default;
	background: gray;
	border-color: gray;
	color: white;
	fill: white;
}

.icon {
	height: 16px;
	position: relative;
	top: 2px;
	left: -3px;
}
</style>

<script>
import { Icon } from '../../index'

export default {
	props: {
		icon: String,

		color: {
			type: String,
			default: 'default'
		},

		disabled: {
			type: Boolean,
			default: false
		}
	},

	components: {
		Icon
	}
}
</script>
