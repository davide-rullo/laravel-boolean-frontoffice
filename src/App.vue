<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {

    RouterView
  },
}
</script>

<template>
  <header>

    <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Pixies Cocktail Bar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Cocktails</router-link>
            </li>


            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">

          <ul class=" list-unstyled">
            <li>Menu</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>

          </ul>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <ul class=" list-unstyled">
            <li>About</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>

          </ul>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <ul class=" list-unstyled">
            <li>Contacts</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.navbar {
  background-color: #00202eab;

}

main {}

footer {
  background-color: black;
  color: white;
  padding: 3rem 0 3rem;
}

.admin-icon {
  fill: white;
}
</style>
