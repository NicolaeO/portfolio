<template>
	<div id="app">
		<nav class="nav navbar navbar-dark bg-dark" style="background-color: #e3f2fd;">
			<router-link class="nav-link" to="/">Home</router-link>
			<router-link class="nav-link" to="/about">About</router-link>
			<router-link class="nav-link" to="/weather">Weather</router-link>
			<router-link class="nav-link" to="/recommendation">Recommendation</router-link>
		</nav>

		<router-view />
	</div>
</template>



<script>

	export default {
		name: 'App',
	}
</script>



<style>
	@import './assets/css/bootstrap.min.css';
	#app {
		background-image: url('./assets/warm-bg.jpg');
		background-size: cover;
		background-position: bottom;
		transition: 0.4s;
		height: 100vh;
	}
</style>
