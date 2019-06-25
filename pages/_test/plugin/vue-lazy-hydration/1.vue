<template>
	<div>
		<div>{{date}}</div>
		<div>{{text}}</div>

		<div>{{kkk}}</div>

		<LazyHydrate ssr-only>
			<div :key="a">
				<div>{{date}}</div>
				<div>{{text}}</div>
			</div>
		</LazyHydrate>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import LazyHydrate from 'vue-lazy-hydration';

@Component({
	components: {
		LazyHydrate,
	},
})
export default class date extends Vue
{
	name: "date";

	data()
	{
		return {
			kkk: 'false',
			date: Date.now(),
			text: (new Date).toString(),
		}
	}

//	async asyncData(context)
//	{
//		return {
//			kkk: 'true',
//			date: Date.now(),
//			text: (new Date).toString(),
//		}
//	}
}
</script>

<style scoped lang="scss">

</style>
