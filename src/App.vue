<script>
import { RouterView } from 'vue-router';
import ComponentFooter from './components/ComponentFooter.vue';
import ComponentNavbar from './components/ComponentNavbar.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    ComponentFooter,
    RouterView,
    ComponentNavbar
  },
}
</script>

<template>
  <header>
    <ComponentNavbar />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <ComponentFooter />
  </footer>
</template>

<style scoped>
footer {
  background-color: black;
  color: white;
  padding: 3rem 0 3rem;
}

.admin-icon {
  fill: white;
}
</style>
