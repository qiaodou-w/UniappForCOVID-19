<template>
	<view class="formcontainer">
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
			}
	},
	components: {
		addrPicker
	}
	}
</script>

<style lang="scss">
	.formcontainer {
		
		width: 680rpx;
		margin: 0 auto;
		
		// font-weight: bold;
		font-size: 32rpx;
		// line-height: 80rpx;
		
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
	
	
	
	
	
	
	
	

</style>
