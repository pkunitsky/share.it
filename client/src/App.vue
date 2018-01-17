<template>
  <div id="app">
    <v-app>
      <Nav/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  import TokenChecker from '@/utils/TokenChecker'
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
          TokenChecker.checkEvery()

          console.log(this.$route)
          // if (this.$route === '/auth') {
          //   this.$router.push('/')
          // }
        }
      }
    },
    created () {
      TokenChecker.checkEvery()
    }
  }
</script>
