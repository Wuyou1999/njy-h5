<template>
	<div class="container">
		<el-carousel>
			<el-carousel-item v-for="(img,index) in imgs" :key="index" >
				<div class="imgs">
					<a href="">
						<img :src="img.url" class="img-title" />
					</a>
					<!-- <img :src="img.url" class="img-title" /> -->
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Njy',
		data() {
			return {
				imgs: [{
						id: 1,
						url: 'http://object.jsnjy.net.cn/OSS/20190423/565eaead098c454cbaf670fc30d82f9d.jpg'
					},
					{
						id: 2,
						url: 'http://object.jsnjy.net.cn/OSS/20190422/7fcd3bc6d8744a81b2672a0575e84cc1.jpg'
					},
					{
						id: 3,
						url: 'http://object.jsnjy.net.cn/OSS/20190404/d62ff5788b214bd4941996ead0d379b4.jpg'
					},
					{
						id: 4,
						url: 'http://object.jsnjy.net.cn/OSS/20190311/d2e31f2c62c040f9a94276dee3a8ab0d.jpg'
					},
					{
						id: 5,
						url: 'http://object.jsnjy.net.cn/OSS/20190322/f431b07775a6482e83bc31f1b06d28b5.jpg'
					},
					{
						id: 1,
						url: 'http://object.jsnjy.net.cn/OSS/20190111/26b6545c4d7445c098ad4b356384b1b7.jpg'
					},
					{
						id: 1,
						url: 'http://object.jsnjy.net.cn/OSS/20190320/dcbfe44a78ca43e1a74421472578b459.jpg'
					},
					{
						id: 1,
						url: 'http://object.jsnjy.net.cn/OSS/20171121/20171121145500487.jpg'
					}
				]
			};
		}
	};
</script>

<style scoped>
	.el-carousel__item img {
		width: 1000px;
		height: 330px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.el-carousel__item {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		/* display: flex;
		justify-content: center; */
	}

	.container {
		width: 1000px;
		margin: 0 auto;
		margin-top: 10px;
		height: 350px;
	}
</style>
