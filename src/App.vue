<template>
	<div id="app">
		<nav class="nav navbar navbar-dark bg-dark">
			<div class="nav nav-tabs" id="nav-tab" role="tablist">
				<router-link class="nav-item nav-link" role="tab" active-class="active" exact to="/">Home</router-link>
				<router-link class="nav-item nav-link" role="tab" active-class="active" to="/about">About</router-link>
				<router-link class="nav-item nav-link" role="tab" active-class="active" to="/weather">Weather</router-link>
				<router-link class="nav-item nav-link" role="tab" active-class="active" to="/recommendation">Recommendation</router-link>
			</div>
		</nav>

		<router-view />

		<!-- <footer class="footer mt-2">
			<p>
				Hello
			</p>

		</footer> -->
	</div>
</template>



<script>
	export default {
		name: 'App'
	}
</script>



<style>
	@import './assets/css/bootstrap.min.css';

	body {
		background-image: url('./assets/warm-bg.jpg');
		background-size: cover;
		background-position: bottom;
		background-attachment: fixed;
	}
	
	/* #app {
		transition: 0.4s;
		height: 100vh;
	} */

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #222;
		color: white;
		text-align: center;
		height: 30px;
	}
	.red-heart{
		color: red;
	}
	.nav-tabs{
		border-bottom: none;
	}
</style>
