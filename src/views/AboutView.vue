<template>
    <div>
        <section class="about pt-4">
            <div class="container pt-4 pb-4 d-flex gap-5">
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <img class="img-fluid p-2"
                            src="https://flawless.life/wp-content/uploads/2023/06/I-Migliori-Cocktail-Bar-di-Milano-COVER.jpg"
                            alt="">
                    </div>
                    <div class="col">

                        <h2>The journey</h2>
                        <p>Welcome to Boolean Cocktail Bar, where passion for mixology meets the art of hospitality. Our
                            journey
                            began with a simple idea – to create a space where people can escape the ordinary and embark on
                            a
                            sensory adventure through expertly crafted cocktails.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container pt-4 pb-4 d-flex gap-5">
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col order-2 order-sm-1">

                        <h2>Our story</h2>
                        <p>At Boolean Cocktail Bar, our story is steeped in the rich traditions of mixology, yet we
                            constantly strive to push boundaries and explore new flavor horizons. From our humble beginnings
                            to the vibrant present, every chapter of our story is written with dedication to excellence and
                            a commitment to delivering unforgettable experiences.
                        </p>

                    </div>
                    <div class="col order-1 order-sm-2">
                        <img class="img-fluid p-2"
                            src="https://www.enotecalacantinetta.com/wp-content/uploads/2022/04/mixology.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container pt-4 pb-4 d-flex gap-5">
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <img class="img-fluid p-2"
                            src="https://img.freepik.com/premium-photo/hipster-friends-toasting-multicolored-fancy-drinks-fashion-bar-trendy-people-having-fun-together-drinking-cocktails-happy-hour-food-beverage-party-time-concept-vivid-contrast-filter_101731-1248.jpg"
                            alt="">
                    </div>
                    <div class="col">

                        <h2>Our mission</h2>
                        <p>
                            Our mission at Boolean Cocktail Bar is to be more than just a bar; we aim to be a destination
                            where friends gather, celebrations unfold, and memories are made. We're dedicated to providing
                            an exceptional drinking experience that goes beyond the glass, where each sip tells a story.
                        </p>
                    </div>
                </div>
            </div>
            <div class="visit">
                <div class="container p-5">
                    <h2 class="text-center">Visit us</h2>
                    <p>Come join us at Boolean Cocktail Bar and be part of our story. Whether you're a cocktail enthusiast,
                        a
                        socialite, or someone looking for a relaxed evening, there's a place for you at our bar.</p>
                </div>
            </div>

        </section>

    </div>
</template>

<script>


export default {
    name: 'AboutView',

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;500;600;700&display=swap');

.about {
    background-color: black;
    color: white;
    font-family: 'Urbanist', sans-serif;
}

h2 {
    color: #fdd03b;
}

.visit {
    background: #4e8f93;

    .container {
        width: 50%;
        margin: auto;
        text-align: center;
    }
}

p {
    font-size: 1.3rem;
}
</style>