<template>
  <v-container fluid class="container--flex">
    <v-layout class="AuthPage-hero flex-grow" row wrap>
      <div id="particles"></div>
      <v-flex md6 lg8>
        <Welcome/>
      </v-flex>
      <v-flex md6 lg4>
        <Login/>
        <Register/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <Footer/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Welcome from './Welcome'
  import Login from './Login'
  import Register from './Register'

  import particlesConfig from '@/assets/json/particles.config.json'

  export default {
    name: 'AuthPage',
    components: {
      Welcome,
      Login,
      Register
    },
    mounted () {
      window.particlesJS.load('particles', particlesConfig)
    }
  }
</script>

<style>
  .AuthPage-hero {
    position: relative;
    background-color: #1da1f2;
    padding-bottom: 12px;
  }
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  .Register,
  .Login,
  .Welcome {
    z-index: 2;
  }

  .container--flex {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .flex-grow {
    flex-grow: 1 !important;
  }

  .AuthPage-form {
    width: 90%;
    max-width: 384px;
    margin: 16px auto;
  }
</style>
