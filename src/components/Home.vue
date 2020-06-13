<template>
    <div id="home_app">
        <div class="container" >
            <h1 class="text-center mt-3">Welcome to my personal page</h1>
        </div>
    </div>
</template>




<script>
    export default {
        name: 'Home',
        options:{
            title: "Home"
        },
        created(){
            document.title = "Welcome";
        }
    }
</script>


<style scoped>
    #home_app {
    /* body { */
		background-size: cover;
		transition: 0.4s;
		height: 100vh;
		padding: 30px;
		color: #fff;
		background-image: url('../assets/moon-bg.jpg') !important;
        background-attachment: fixed;
	}

</style>