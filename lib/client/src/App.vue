<template>
  <div id="app">
    <v-app>
      <Nav/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  import tokenChecker from '@/utils/token-checker'
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['token'])
    },
    watch: {
      token (value) {
        if (!value) {
          this.$router.push('/auth')
        } else {
          tokenChecker.checkEvery()

          if (this.$route.path === '/auth') {
            this.$router.push('/')
          }
        }
      }
    },
    created () {
      tokenChecker.checkEvery()
    }
  }
</script>
