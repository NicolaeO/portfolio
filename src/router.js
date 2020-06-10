import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Weather from './components/Weather.vue'
import Recommendation from './components/Recommendation.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/weather',
            name: 'weather',
            component: Weather
        },
        {
            path: '/recommendation',
            name: 'recommendation',
            component: Recommendation
        },
    ]
})