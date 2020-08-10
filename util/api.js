const BaseUrl = 'http://localhost:2333'

export const myRequest = (options) => {
	return new Promise((reslove, reject) => {
		uni.request({
			url: BaseUrl + options.url,
			method: options.method || "GET",
			data: options.data || {},

			success: (res) => {
				if(res.statusCode!== 200) {
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				reslove(res)
			},
			fail: (err) => {
				return uni.showToast({
					title:"请求数据失败"
				})
				reject(err)
			}
			
		})
	})
};

	