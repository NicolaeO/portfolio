<template>
    <div id="home_app">
            <h1 class="text-center display-4 font-weight-bold text-uppercase welcome-text">Welcome to my page</h1>


        <!-- <div class="welcome-page">
            <h1 class="text-center display-4 font-weight-bold text-uppercase welcome-text">Welcome to my page</h1>
        </div> -->
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
    }
    .welcome-page {
    }

    .welcome-text {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}

</style>