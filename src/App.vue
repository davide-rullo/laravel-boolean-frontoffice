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
          <div class="admin">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <a href="http://127.0.0.1:8000/admin" class="btn" target="_blank">Admin <svg
                  xmlns="http://www.w3.org/2000/svg" class="admin-icon" height="1em"
                  viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg> </a>

            </ul>
          </div>
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
