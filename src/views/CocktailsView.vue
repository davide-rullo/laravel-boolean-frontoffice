<script>
import axios from 'axios';
export default {
    name: 'CocktailsView',
    data() {
        return {
            cocktails: null,
            base_url: 'http://127.0.0.1:8000',
            cocktail_api: '/api/cocktails',
        }
    },
    mounted() {
        axios
            .get(this.base_url + this.cocktail_api)
            .then(response => {
                console.log(response);
                this.cocktails = response.data.result
            })
            .catch(err => {
                console.error(err);
            })
    }
}

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-3" v-if=cocktails>
            <div class="col" v-for="cocktail in cocktails.data">
                <div class="card">
                    <img class="card-img-top" :src="cocktail.thumb" alt="">
                    <div class="card-body">
                        <h1>{{ cocktail.name }}</h1>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h3 {
    color: black;
}
</style>