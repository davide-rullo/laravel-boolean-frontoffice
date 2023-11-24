<script>
import axios from 'axios';
export default {
    name: 'AlcoholFreeCardView',
    data() {
        return {
            cocktails: null,
            nonAlcoholicCocktails: [],
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
                this.nonAlcoholicCocktails = this.cocktails.data.filter(cocktail => cocktail.alcoholic !== 0);
            })
            .catch(err => {
                console.error(err);
            })
    }
}
</script>

<template>
    <section class="my_bg py-3 ">
        <div class="container ">
            <div v-if="nonAlcoholicCocktails">
                <div v-for="(cocktail, index) in nonAlcoholicCocktails" :key="index">
        
                     
                        <div class="row pb rounded justify-content-center  p-2 my-5">
                            <div class="col-lg-6 d-flex justify-content-center align-items-center p-0">
                                <img class="my_img img-fluid " :src="cocktail.thumb" alt="">
                            </div>
                            <div class="col-lg-12 text-white height text-center d-flex align-items-center py-4">
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
                                    <div>{{ cocktail.preparation }}
                                    
                                       <p> Alcoholic Drink 😈</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                                    
                      
                    </div>
                </div>
              <router-link class="btn btn-dark v-25" aria-current="page" to="/cocktails">Go Back</router-link>
            </div>
    </section>
</template>

<style lang="scss" scoped>
h3 {
    color: black;
}


.primary {
    color: #fdd03b;
}

.my_bg {
    background-color: rgb(24, 22, 22);
}

.my_img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    object-position: center;
}

.pb {
    background-color: black;
    padding-bottom: 9rem;
    border: 1px solid white;
}

.pb:hover {
    border: 1px solid #fdd03b ;
}
</style>