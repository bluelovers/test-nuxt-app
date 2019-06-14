<template>

	<div>

		<div>{{data}}</div>
		<div>{{text}}</div>

	</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	data()
	{
		return {
			date: Date.now(),
			text: (new Date).toString(),
		}
	}
}
</script>

<style scoped lang="scss">

</style>
