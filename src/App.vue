<template>
	<div id="app">
		<div class="main-app">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-item nav-link" role="tab" active-class="active" exact to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-item nav-link" role="tab" active-class="active" to="/about">About</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-item nav-link" role="tab" active-class="active" to="/weather">Weather</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-item nav-link" role="tab" active-class="active" to="/activities">Activities</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-item nav-link" role="tab" active-class="active" to="/recommendation">Recommendation</router-link>
						</li>
					</ul>
				</div>
			</nav>

			<router-view />
		</div>

		<footer class="footer pt-4">
			follow me on:<a href="https://www.instagram.com/nicolaeorlov/">
				<img src="./assets/instagram.png">
			</a>
			<p>
				Hello
			</p>

		</footer>
	</div>
</template>



<script>
	export default {
		name: 'App'
	}
</script>



<style>
	@import './assets/css/bootstrap.min.css';

	.active{
		color:black;
		font-size: 110%;
	}

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

	.main-app {
		margin-bottom: 10em;
	}
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #222;
		color: white;
		text-align: center;
		height: 8em;
	}
	.footer img {
		width: 50px;
		filter:grayscale(100%)
	}
	.red-heart{
		color: red;
	}
	.nav-tabs{
		border-bottom: none;
	}
</style>
