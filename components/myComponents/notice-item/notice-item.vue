<template>
	<view class="container">
		<view class="head">
			<image class="icon" src="../../../static/img/calendar.png"></image>
			<text>打卡记录</text>
		</view>
		<view class="body">
			<view class="row">
				<text class="text">学号</text>
				<text>{{list.id}}</text>
			</view>
			<view class="row">
				<text class="text">姓名</text>
				<text>{{list.name}}</text>
			</view>
			<view class="row">
				<text class="text">温度</text>
				<text>{{list.temperure}}</text>
			</view>
			<view class="row">
				<text class="text">打卡地点</text>
				<text>{{list.location}}</text>
			</view>
			<view class="row">
				<text class="text">打卡时间</text>
				<text>{{list.date}}</text>
			</view>
			
		</view>
		<!-- 学号 {{list.id}} -->

	</view>
</template>

<script>
	export default {
		name: 'NoticeItem',
		data() {
			return {

			};
		},
		props: {
			list: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 750rpx;
		box-shadow: 0 7rpx 10rpx -7rpx #333;
		background-color: #f7f7f7;

		.head {
			width: 100%;
			display: flex;
			justify-content: left;
			align-items: center;
			.icon {
				height: 64rpx;
				width: 64rpx;
				padding: 10rpx;

			}

			border-bottom: 2rpx solid #333333;
		}
		
		.body {
			width: 710rpx;
			padding: 15rpx 20rpx;
			.row {
				width: 710rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: nowrap;
				padding: 10rpx 0;
				.text {
					
				}
				
			}
		}
	}
</style>
