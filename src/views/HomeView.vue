<template>
    <div>
        <section class="jumbo">
            <div class="wrapper d-flex justify-content-center align-items-center">
                <div class="text-white jumbo-cont">
                    <h2 class="pb-3">BOOLEAN COCKTAIL BAR</h2><br>
                    <h3 class="pb-3 col-6">A world where each moment is crafted with care and each drink is
                        an invitation to savor the exceptional.</h3>
                    <div class="col-4 text-center pt-4">
                        <router-link class="cta p-2 px-3" to="/cocktails">Show our menu! ⭐</router-link>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.jumbo {
    background-image: url('../assets/bar.jpg');
    background-size: cover;
    height: 1000px;
}

.jumbo-cont {
    padding: 8rem;
}

.cta {
    border-radius: 1rem;
    background-color: #fdd03b;
    padding: .5rem;
    color: black;
    margin-top: 3rem;
}

h2 {
    color: #fdd03b;
}
</style>