<template>
	<view class="container">

		<CircleButton type="primary" class="clock">
			<view @click="navigateToDetail">
				打卡
			</view>
		</CircleButton>


		<!-- 		
		<button type="default" id="doit">
			打卡
		</button> -->

	</view>
</template>

<script>
	import CircleButton from "../../components/myComponents/CircleButton/CircleButton.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			CircleButton
		},
		methods: {
			navigateToDetail() {
				uni.navigateTo({
					url: '../detail/detail',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;

		.clock {
			margin: 0 auto;
		}
	}
</style>
