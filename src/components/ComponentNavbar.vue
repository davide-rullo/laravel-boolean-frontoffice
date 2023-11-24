<script>
export default {
    name: 'ComponentNavbar'
}
</script>
<template>
    <nav class="my-bg">
        <div class="container">
            <ul class="list-unstyled d-flex justify-content-around text-white m-0 p-3">
                <li><router-link class="nav-link effect" aria-current="page" to="/">HOME</router-link></li>
                <li><router-link class="nav-link effect" aria-current="page" to="/cocktails">COCKTAILS</router-link></li>
                <li><router-link class="nav-link effect" aria-current="page" to="/about">ABOUT US</router-link></li>
                <li><router-link class="nav-link effect" aria-current="page" to="/contacts">CONTACTS</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
.effect:hover {
    color: #fdd03b;
}

.my-bg {

    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>