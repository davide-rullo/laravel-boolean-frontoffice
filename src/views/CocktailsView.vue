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
    <div class="jumbotron">
        <div>
            <div class="container-fluid py-5 jumbotron">
                <h1 class="display-5 fw-bold text-center pt-5 mt-5 primary">OUR COCKTAILS</h1>
            </div>
        </div>
    </div>
    <section class="my_bg pt-5">
        <div class="container">
            <div v-if="cocktails">
                <div v-for="cocktail in cocktails.data">
                    <div>
                        <div class="row pb">
                            <div class="col-6">
                                <img class="my_img" :src="cocktail.thumb" alt="">
                            </div>
                            <div class="col-6 text-white height text-center d-flex align-items-center">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="5" fill="currentColor"
                                            class="bi bi-circle-fill primary" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>
                                        <h2 class="primary text-uppercase">{{ cocktail.name }}</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="5" fill="currentColor"
                                            class="bi bi-circle-fill primary" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>

                                    </div>

                                    <p>{{ cocktail.preparation }}</p>
                                    <p v-if="cocktail.alcoholic === 0">
                                        Soft Drink 👼
                                    </p>
                                    <p v-else>
                                        Alcohol Drink 😈
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h3 {
    color: black;
}

.jumbotron {
    background-image: url(https://img.freepik.com/free-photo/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai_188544-12370.jpg?w=1380&t=st=1700772488~exp=1700773088~hmac=e2df888e917208f1695de3f1fbb099827c5abcfe53e59fd62ced0bbbadff0696);
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
    background-color: black;
}

.my_img {
    width: 450px;
    height: 500px;
    object-fit: cover;
}

.pb {
    padding-bottom: 9rem;
}
</style>