<template>
	<view @click="clock" :class = "type == 'Default'?'btn default':type == 'primary'?'btn primary':type == 'danger'?'btn danger':'btn default'">
		<slot>
		</slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			type : {
				type: String,
				default: 'Default'
			}
		},
		methods: {
			async clock(){
				// const res = await this.$myRequest({
				// 	url:'/users'
				// })
				
				// console.log(res)
			}
		},
		
	}
</script>

<style lang="scss">
	.btn {
		width: 375rpx;
		height: 375rpx;
		color: #F1F1F1;
		font-size: 50rpx;
		text-align: center;
		border-radius: 50%;
		line-height: 375rpx;
	}
	
	.default {
		background-color: #777777;
	}
	
	.primary {
		background-color: $uni-color-primary;
	}
	
	.danger {
		background-color: #CCCCCC;
	}
	

</style>
