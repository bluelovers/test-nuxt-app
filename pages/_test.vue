<template>

	<div>

		<ul>
			<li><nuxt-link to="/_test/plugin/markdownit">markdownit</nuxt-link></li>

			<li><nuxt-link to="/_test/plugin/vue-lazy-hydration/1">vue-lazy-hydration/1</nuxt-link></li>
			<li><nuxt-link to="/_test/plugin/vue-lazy-hydration/2">vue-lazy-hydration/2</nuxt-link></li>

		</ul>

		<nuxt-child />

	</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class testIndex extends Vue
{
	name: "testIndex"
}
</script>

<style scoped lang="scss">

</style>
