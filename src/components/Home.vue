<template>
    <div id="home_app">
        <div class="text-center welcome-page">
            <h1 class="display-4 font-weight-bold text-uppercase welcome-text">Welcome to my page</h1>
            <p class="text-uppercase text-secondary">to learn more about my experience check out <router-link class="link" to="/about">About</router-link> page</p>
            <p class="text-uppercase text-secondary">also check out <router-link class="link" to="/activities">Activities</router-link> I just love beeing outdoors</p>
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
        user-select: none;
    }
    .welcome-page {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .welcome-text {
	}

    .link{
        color: #333;
        text-decoration: none;
    }

</style>