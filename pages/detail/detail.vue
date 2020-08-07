<template>
	<view class="container">
		<view class="top-message">
			<image class="img" src="../../static/img/calendar.png" mode="aspectFill"></image>
			<button class="explanation" type="default" @click="showExplanation">填报说明</button>
			<text class="deadline">截至时间: 2020-08-03{{}}</text>
		</view>

		
		<view class="picker" @click="openAddres">
			<text>目前居住地</text>
			<text>{{pickerText}}</text> 
		</view>
		
		<picker :range="options" @change="bindPickerChange" :value="index">
			<view class="picker">
				<text>假期是否离渝</text>
				<text class="result">{{options[index]}}</text>
			</view>
		</picker>
			
		<picker :range="options" @change="bindPickerChange" :value="index">
			<view class="picker">
				<text>体温是否正常</text>
				<text class="result">{{options[index]}}</text>
			</view>
		</picker>
		<addrPicker ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF" cancelColor="#939393">
			
		</addrPicker>
		
		<view class="buttons">
			<button :class= "commitStatus" type="default" @click="commit" :disabled="this.$store.state.hasCommit">
				{{hasCommit?'今日已打卡':'打卡'}}
			</button>
		</view>
	</view>
</template>

<script>
	import addrPicker from "../../components/simple-address/simple-address.vue"
	export default {
		data() {
			return {
				options: ["待选择", "是", "否"],
				index: 0,
				cityPickerValueDefault: [0, 0, 0],
				pickerText: '待选择'
			}
		},
		methods: {
			commit() {
				this.$store.commit('commit')
				uni.showModal({
					content:"打卡成功"
				})
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
			openAddres() {
				this.cityPickerValueDefault = [0, 0, 0]
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				this.pickerText = e.label;
				// this.pickerText = JSON.stringify(e);
			},
			showExplanation() {
				uni.showModal({
					title:"填写说明",
					content: `1.所有学生均需填写此表。
					2.“现居住地/宿舍”需要逐级填写到最小单元，农村学生至少填写至村，城镇学生至少填写到社区、小区，留校学生填写至寝室号。
					3.暑假期间是否离渝相关栏目：(1）填报日倒推14天以内的返渝学生需要填写，如2月14日填报，则在2月1日及之后返渝的需要填写，1月31日以前返渝的无需填写；（2）返渝路线填写起止站，中途有换乘、停留的需要填写中间站。
					4.有无疾病史：有肺部疾病或心血管系统疾病的填“有”，其他可填无。`
				})
			},
			
	},
	computed: {
		commitStatus: function() {
			return this.$store.state.hasCommit ? "commit has-commit" : "commit n-commit" 
		},
		hasCommit: function() {
			return this.$store.state.hasCommit
		}
	},
	components: {
		addrPicker
	}
	}
</script>

<style lang="scss">
	.container {
		
		width: 680rpx;
		margin: 0 auto;
		
		// font-weight: bold;
		font-size: 32rpx;
		// line-height: 80rpx;
		
		.top-message {
			width: 100%;
			height: 400rpx;
			overflow: auto;
			line-height: 32rpx;
			position: relative;
			
			.img {
				width: 600rpx;
				height: 300rpx;
			}
			
			.explanation {
				position: absolute;
				left: 0rpx;
				top: 315rpx;
				
				height: 60rpx;
				border-radius: 10%;
				background-color: #4CD964;

				line-height: 60rpx;
				font-size: 26rpx;
				color: #FFFFFF;
			}
			
			.deadline {
				position: absolute;
				right: 5rpx;
				top: 325rpx;
			}
		}
		
	}
	
	.picker {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		

		
		
		border-bottom: 1rpx solid #7d7d7d;
		height: 80rpx;
	
	}
	
	.buttons {
		display: flex;
		justify-content: center;
		
		.commit {
			height: 100rpx;
			width: 300rpx;
			
			line-height: 100rpx;

			
		}
		
		.has-commit {
			background-color: $uni-bg-color-grey;
			color: #000000;
		}
		
		.n-commit {
			background-color: $uni-color-primary;
			color: #FFFFFF;
		}
		
		
	}

	

</style>
