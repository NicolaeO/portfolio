<template>
	<div id="app">
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

		<div class="router-view container">
			<router-view />

			<div class="push"></div>
		</div>
		
		<footer class="footer pt-4 pb-4 row">
			<div class="col-sm-4 col-12">
				Follow me:
				<a href="https://www.instagram.com/nicolaeorlov/" class="pl-1 pr-1" target="_blank">
					<img src="./assets/instagram.png" alt="IG | ">
				</a>
				<a href="https://www.facebook.com/orlov.nicolae/" class="pl-1" target="_blank">
					<img src="./assets/facebook.png" alt="Facebook">
				</a>
				<!-- <a href="https://www.instagram.com/nicolaeorlov/">IG</a> -->
			</div>

			<div class="col-sm-4 col-12 faded padding-sm-1">
				&copy; Nick 2020
			</div>

			<div class="col-sm-4 col-12">
				Checkout my:
				<a href="https://github.com/NicolaeO" class="pl-1 pr-1" target="_blank">
					<img src="./assets/github.png" alt="GitHub | ">
				</a>
				<a href="https://repl.it/@Nicu104">
					<img src="./assets/replit.png" alt="Repl.it" target="_blank">
				</a> 
			</div>
		</footer>
	</div>
</template>



<script>
	
	export default {
		name: 'App',
		methods: {
			insta(){
			}
		}
	}
</script>



<style>
	@import './assets/css/bootstrap.min.css';
	
	
	@media only screen and (max-width: 576px) {
		.router-view {
			min-height: calc(100vh - 160px)!important;
		}
		.push,
		.footer{
			height: 160px!important;
		}
		.padding-sm-1{
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
	}
	
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

	
	.router-view {
		transition: 0.4s;
		margin-bottom: -60px;
		min-height: calc(100vh - 70px);
		position: relative;
	}

	.footer{
		position: sticky;
		left: 0;
		width: 100%;
		background-color: #222;
		color: white;
		text-align: center;
	}
	.push,
	.footer{
		height: 72px;
	}

	.instagram{
		width: 50px;
		filter:grayscale(100%) contrast(10);
	}

	.red-heart{
		color: red;
	}

	.nav-tabs{
		border-bottom: none;
	}

	.faded{
		color:#666
	}
	a img{
		vertical-align: middle;
		width: 35px;
	}
	
</style>
