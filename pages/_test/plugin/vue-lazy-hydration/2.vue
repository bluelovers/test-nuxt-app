<template>
	<div>
		<div>{{date}}</div>
		<div>{{text}}</div>

		<div>{{kkk}}</div>

		<LazyHydrate ssr-only>
			<div :key="b">
				<div>{{date}}</div>
				<div>{{text}}</div>
			</div>
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default
{
	components: {
		LazyHydrate,
	},

	data()
	{
		return {
			kkk: 'false',
			date: Date.now(),
			text: (new Date).toString(),
		}
	}
}
</script>

<style scoped lang="scss">

</style>
