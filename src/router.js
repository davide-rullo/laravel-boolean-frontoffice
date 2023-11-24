import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import CocktailsView from "./views/CocktailsView.vue";
import AlcoholCardView from "./views/AlcoholCardView.vue";
import AlcoholFreeCardView from "./views/AlcoholFreeCardView.vue";



import ContactsView from "./views/ContactsView.vue";






const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/cocktails',
        name: 'cocktails',
        component: CocktailsView
    },


    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },

    {
        path: '/alcohol',
        name: 'alcohol',
        component: AlcoholCardView
    },

    {
        path: '/alcohol_free',
        name: 'alcohol_free',
        component: AlcoholFreeCardView
    },

    





];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }