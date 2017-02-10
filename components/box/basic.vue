<template>
	<main
		v-bind:class="expanded ? '' : 'active'"
		v-on:click="mainToggle">
		<header>
			<Icon v-if="icon" v-bind:i="icon" />
			<div class="box-title no-select">
				{{ header }}
				<small v-if="subHeader">
					({{ subHeader }})
				</small>
			</div>
			<div v-on:click="toggleExpanded">
				<Icon class="expander"
					v-bind:i="expanded ? 'minus' : 'plus'"/>
			</div>
		</header>
		<div class="body">
			<slot v-if="expanded" />
			<Icon v-else i="ellipsisH" />
		</div>
	</main>
</template>

<style scoped>
main {
	color: #444;
	fill: #444;
	border-top: 4px green solid;
	background: white;
	border-radius: 4px;
	box-shadow: 3px 3px 0 lightgray;
	margin-bottom: 10px;
}

main.active:hover {
	cursor: pointer;
}

main.active:hover .expander {
	fill: #3C8DBC;
}

.expander:hover {
	fill: #3C8DBC;
	cursor: pointer;
}

header {
	padding: 10px;
	padding-top: 6px;
	display: flex;
}

.box-title {
	padding: 0 5px;
	flex-grow: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: inline-block;
}

.icon {
	height: 15px;
	position: relative;
	top: 1px;
}

.body {
	padding: 10px;
}
</style>

<script>
import { Icon } from '~index';

export default {
	props: ['header', 'subHeader', 'icon'],

	data: () => ({
		expanded: true
	}),

	components: {
		Icon
	},

	methods: {
		mainToggle(e) {
			if (!this.expanded) this.expanded = true;
			e.stopPropagation();
		},

		toggleExpanded(e) {
			this.expanded = !this.expanded;
			e.stopPropagation();
		}
	}
}
</script>
