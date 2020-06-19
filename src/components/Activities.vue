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
            local_images: [
                "img_1.jpg",
                "img_2.jpg",
                "img_3.jpg",
                "img_4.jpg",
                "img_5.jpg",
                "img_6.jpg",
                "img_7.jpg",
                "img_8.jpg",
                "img_9.jpg",
                "img_10.jpg",
                "img_11.jpg",
                "img_12.jpg",
                "img_13.jpg",
                "img_14.jpg",
                "img_15.jpg",
                "img_16.jpg",
                "img_17.jpg",
                "img_18.jpg",
                "img_19.jpg",
                "img_20.jpg",
                "img_21.jpg",
                "img_22.jpg",
                "img_23.jpg",
                "img_24.jpg",
                "img_25.jpg",
                "img_26.jpg",
                "img_27.jpg",
                "img_28.jpg"
            ],
            imgs: [],
            visible: false,
            index: 0
        }
    },
    methods: {
        showImg (index) {
            this.index = index;
            this.visible = true;
        },
        handleHide () {
            this.visible = false;
        },
        getImage(img) {
            return require(`./../assets/activities/${img}`);
        },
        shuffle() {
            this.local_images.sort(() => Math.random() - 0.5);
        }
    },
    created(){
        this.shuffle();
        for(let i of this.local_images){
            this.imgs.push(this.getImage(i))
        }
    },
}
</script>


<style scoped>
    .image-container{
        /* flex-sp */
    }
    .img-small{
        width: 300px;
        border-radius: 10px;
    }
    .pic{
        display: inline-block;
        margin-top: 1.5em
    }
    .gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>