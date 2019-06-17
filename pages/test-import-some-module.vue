<template>

	<div>
		<no-ssr>
		<div v-if="$nuxt.isOffline">You are offline</div>
		<div v-else>You are online</div>
		</no-ssr>

		<span>{{ re }}</span>
	</div>

</template>

<script lang="ts">
import zhRegExp from '@/lib/regexp-cjk';
import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
	name: "test",

	data()
	{
		let re = new zhRegExp(`监听 query 参数改变[中文\\p{Punctuation}]`, 'u');
		return {
			re,
		}
	},
}
</script>

<style scoped lang="scss">

</style>
