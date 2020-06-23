<template>
    <div id="activities-app" class="container" v-if="imgs.length !== 0">
        <div class="d-flex">
            <div class="gallery">
                <div
                    v-for="(src, index) in imgs"
                    :key="index"
                    class="pic"
                    @click="() => showImg(index)"
                >
                    <img class="img-small" :src="src">
                </div>
            </div>

            <vue-easy-lightbox
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
            ></vue-easy-lightbox>
        </div>
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    name: "Activities",
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            imgs: [],
            visible: false,
            index: 0,
            base_url: "http://localhost:666/"
        }
    },
    methods: {
        showImg (index) {
            this.index = index;
            this.visible = true;
        },
        handleHide () {
            this.visible = false;
        }
    },
    created(){
        fetch(`${this.base_url}api/images`)
            .then(response => {
                    return response.json();
            })
            .then(res => {
                this.imgs = res;
            });
    },
}
</script>


<style scoped>
    .image-container{
        /* flex-sp */
    }
    .img-small{
        border-radius: 10px;
        height: 100%;
    }
    .pic{
        height: 200px;
        display: inline-block;
        margin-top: 1.5em
    }
    .gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>