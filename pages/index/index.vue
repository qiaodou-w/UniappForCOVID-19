<template>
	<view class="container">
		<view class="button-container">

			<circle-button :type="hasCommit?'primary':'danger'" class="clock">
				<view @click="navigateToDetail">
					<text v-if="hasCommit">已打卡</text>
					<text v-else>未打卡</text>
				</view>
			</circle-button>

		</view>
		<view class="center">
			<text>上次打卡时间: {{lastTime}}</text>
		</view>
	</view>




</template>

<script>
	import CircleButton from "../../components/myComponents/CircleButton/CircleButton.vue"
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				lastTime:"2020-08-07"
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
					animationDuration: 100
				})
			},
		},
		computed: {
			...mapState({
				hasCommit: state => state.hasCommit
			})
			
		}
	}
</script>

<style lang="scss">
	.container {


		.button-container {
			padding: 40rpx;
			font-size: 16rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.clock {}
		}
		
		.center {
			text-align: center;
			
			text {
				display: block;
				padding: 20rpx;
			}
		}
	}
</style>
