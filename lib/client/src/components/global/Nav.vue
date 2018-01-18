<template>
  <div class="nav">
    <router-link class="nav__link" exact to="/">home</router-link>
    <router-link class="nav__link" exact to="/auth">auth</router-link>
    <router-link class="nav__link" exact to="/test">test</router-link>
    <router-link class="nav__link" exact to="/auth/logout">logout</router-link>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    methods: {
      ...mapMutations(['setToken'])
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
  }
  .nav__link {
    display: inline-block;
    padding: 6px 12px;
  }
  .ml-auto {
    margin-left: auto;
  }
</style>
