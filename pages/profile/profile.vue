<template>
	<view class="container">
		<view class="user-info">
			<image src="../../static/img/ic_tabbar_profile_select.png" mode=""></image>

			<view class="main-info">
				<text class="name">王意然</text>
				<text>2017212986</text>
			</view>
			<view class="second-info">
				<text class="sex">性别: 男</text>
				<text>年级: 2017级</text>
				<text>班级: 08051701班</text>
				<text>学院: 自动化学院</text>
				<text>统一认证码: 1652563</text>
				<text>专业: 物联网工程</text>
			</view>
		</view>
		
		<button class="about" type="default">
			<image src="../../static/img/_ic_tabbar_home.png" mode=""></image>
			<text>关于</text>
		</button>
		
		<button class="change" type="warn">
			切换绑定
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ececec;
	}

	.container {
		margin: 26rpx auto;
		width: 750rpx;
		
		// position: relative;


		font-size: 32rpx;
		color: #777777;
		
		.user-info {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		
			padding: 20rpx;
			box-shadow: 0 2rpx 6rpx rgba(77, 77, 77, 0.5);
					
			background-color: #f7f7f7;
		
			image {
				height: 150rpx;
				width: 150rpx;
			}
			
			text {
				display: block;
			}
		
			.main-info {
				padding: 0 320rpx 0 20rpx;
		
				.name {
					font-size: 48rpx;
					color: #000000;
				}
			}
			
			.second-info {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 750rpx;
			  padding: 20rpx;
				padding-bottom: 0;
				font-size: 28rpx;
				
				text {
					padding: 6rpx 0;
				}
				
				.sex {
					padding-right: 300rpx;
				}
			}
		
		
		}
		
		.about {
			
			margin-top: 40rpx;
			text-align: left;
			
			image {
				width: 32rpx;
				height: 32rpx;
			}
			
			text {
				margin-left: 40rpx;
			}
		}
		
		.change {
			position: absolute;
			left: 50%;
			bottom: 50rpx;
			
			transform: translateX(-50%);
			
			width: 700rpx;

		}
	}


</style>
