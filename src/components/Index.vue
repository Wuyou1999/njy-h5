<template>
	<div>
		<!-- 顶部导航栏 -->
		<div class="header">
			<div class="nav">
				<div class="header-logo">
					<router-link to="/">
						<img src="../assets/logo_njy.png" class="logo" />
					</router-link>
				</div>
				<div class="header-character">
					<div class="character">
						<router-link to="/index">首页</router-link>
					</div>
					<div class="character">
						<router-link to="/news">资讯</router-link>
					</div>
					<div class="character">
						<router-link to="/video">视频</router-link>
					</div>
					<div class="character">
						<router-link to="/question">提问</router-link>
					</div>
					<div class="character">
						<router-link to="/zhibo">直播</router-link>
					</div>
				</div>

			</div>
		</div>
		<div class="content">
			<router-view />
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
			};
		}
	};
</script>

<style>
	a {
		font-size: 12pt;
		color: #6f6f6f;
		text-decoration: none;
	}

	a:hover {
		color: #009E01;
		font-weight: bold;
	}

	.header {
		width: 100%;
		height: 135px;
		background-color: rgb(255, 255, 255);
	}

	.nav {
		width: 85%;
		margin: 0 auto;
		height: 100%;
		display: flex;
	}

	.header-logo {
		position: absolute;
		left: 160px;
	}

	.header-character {
		position: absolute;
		right: 360px;
		top: 50px;
		display: flex;
		font-size: 18pt;
	}

	.character {
		width: 80px;
		height: 100px;
	}

	.header-logo img {
		width: 300px;
		height: 130px;
	}

	.content {
		width: 100%;
		margin: 0 auto;
		height: 800px;
		background-color: rgb(250, 250, 250);
	}
</style>
