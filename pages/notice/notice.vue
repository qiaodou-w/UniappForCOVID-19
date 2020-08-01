<template>
	<view class="container">
		<block v-for="(item, index) in list" :key="index">
			<notice-item class="notice-item" :list="item"></notice-item>
		</block>

		<!-- 		<view class="notice-item" v-for="(item,index) in list" :key = index >
			{{item.date +' '+ item.id +' ' + item.temperure}}
		</view> -->

	</view>
</template>

<script>
	import NoticeItem from "../../components/myComponents/notice-item/notice-item.vue"
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getList()
		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			this.getList().then(res => {
				uni.stopPullDownRefresh()
				console.log('加载成功')
			})
		},
		onReachBottom() {
			console.log("上拉加载")

		},
		methods: {
			async getList() {
				const res = await this.$myRequest({
					url: '/info'
				})
				this.list = res.data
				return res
			}
		},

		components: {
			NoticeItem
		}
	}
</script>

<style>
	page {
		background-color: #ececec;
	}
</style>

<style lang="scss" scoped>
	.container {
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		.notice-item {
			margin: 15rpx 0 30rpx 0;
		}
	}
</style>
