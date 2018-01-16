<template>
  <div class="app-container">
    <div class="row no-gutters flex-grow bg">
      <div id="particles"></div>
      <div class="col-md-8">
        <Welcome/>
      </div>
      <div class="col-md-4">
        <div class="mdl-grid">
          <Login/>
          <Register/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
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

<style scoped>
  .bg {
    position: relative;
    background-color: #1da1f2;
  }
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
