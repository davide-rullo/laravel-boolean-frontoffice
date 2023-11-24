<script>
import axios from 'axios';
export default {
    name: 'CocktailsView',
    data() {
        return {
            cocktails: [],
            base_url: 'http://127.0.0.1:8000',
            cocktail_api: '/api/cocktails',
        }
    },
    mounted() {
        axios
            .get(this.base_url + this.cocktail_api)
            .then(response => {
                console.log(response);
                this.cocktails = response.data.result;
            })
            .catch(err => {
                console.error(err);
            })
    }
}
</script>
<template>
    <div class="jumbotron">
        <div>
            <div class="container-fluid py-5 jumbotron">
                <h1 class="display-5 fw-bold text-center pt-5 mt-5 primary">OUR COCKTAILS</h1>
                <div class="d-flex justify-content-center my-4">
                    <router-link aria-current="page" to="/alcohol">
                        <button class="btn btn-transparent mx-2">Alcoholic Drinks </button>
                    </router-link>
                    <router-link aria-current="page" to="/alcohol_free">
                        <button class="btn btn-transparent mx-2">Alcohol Free Drinks</button>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
h3 {
    color: black;
}

.jumbotron {
    background-image: url(https://media-assets.lacucinaitaliana.it/photos/61fa685528bbd1b96fb659a2/16:9/w_1920,c_limit/iStock-620723770.jpg);
    background-size: cover;
    margin-top: -65px;
    height: 1000px;
    background-position: center;
    background-color: black;
}

.primary {
    color: #fdd03b;
}

.my_bg {
    background-color: rgb(35, 34, 34);
}

.my_img {
    width: 450px;
    height: 500px;
    object-fit: cover;
}

.pb {
    background-color: black;
    padding-bottom: 9rem;
    border: 1px solid #fdd03b;
}

.btn-transparent {
    background: transparent;
    color: #fdd03b;
    border: 1px solid #fdd03b;
    font-weight: bold;
    font-size: 2rem;
}

.btn-transparent:hover {
    color: #fff;
}
</style>