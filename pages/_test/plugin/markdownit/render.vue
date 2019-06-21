<template>
	<div v-html="$md.render(model)"></div>
</template>

<script lang="ts">
export default {
	name: "render",
	data()
	{
		return {
			model: '# Hello World!',
		}
	},
}
</script>

<style scoped lang="scss">

</style>
