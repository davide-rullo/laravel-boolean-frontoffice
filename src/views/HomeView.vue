<template>
    <div>
        <section class="jumbo">

            <div class="wrapper d-flex justify-content-center align-items-center">
                <div class="container text-center text-white jumbo-cont">
                    <h2 class="pb-3">Pixies cocktail Bar</h2><br>
                    <h3 class="pb-3">A world where each moment is crafted with care and each drink is
                        an invitation to savor the exceptional.</h3>
                    <router-link class=" cta" to="/projects">Explore the menu</router-link>
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
.wrapper {
    height: 70vh;
}

.jumbo {
    background-image: url('../assets/bar.jpg');
    background-size: cover;
    margin-top: -65px;
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
</style>