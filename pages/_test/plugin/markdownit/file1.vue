<template>
	<div v-html="hello"></div>
</template>

<script lang="ts">
// @ts-ignore
import hello from '~/assets/_test/plugin/markdownit/hello.md'

export default {
	name: "file1",
	computed: {
		hello() {
			return hello
		}
	}
}
</script>

<style scoped lang="scss">

</style>
