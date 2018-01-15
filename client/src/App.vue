<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
  import Nav from '@/components/_common/Nav'
  import TokenChecker from '@/utils/TokenChecker'
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['token'])
    },
    watch: {
      token (value) {
        if (value === null) {
          this.$router.push('/auth')
        } else {
          TokenChecker.checkEvery()
        }
      }
    },
    created () {
      TokenChecker.checkEvery()
    },
    components: {
      Nav
    }
  }
</script>
