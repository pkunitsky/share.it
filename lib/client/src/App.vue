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
        if (process.env.NODE_ENV === 'development') {
          console.log('checker disabled for a while for client development')
          return
        }
        
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
