<template>
  <div class="mdl-navigation">
    <router-link class="mdl-navigation__link" to="/">home</router-link>
    <router-link class="mdl-navigation__link" to="/auth">auth</router-link>
    <a
      href="#"
      class="mdl-navigation__link ml-auto"
      @click.prevent="setToken(null)">
      logout
    </a>
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
  .mdl-navigation__link {
    padding: 2px 12px;
  }
  .ml-auto {
    margin-left: auto;
  }
</style>
