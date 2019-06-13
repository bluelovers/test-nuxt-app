<template>
	<div>
		<h1>我是父级页面</h1>
		<nuxt-child :foobar="123" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped lang="scss">

</style>
