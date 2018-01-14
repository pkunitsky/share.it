<template>
  <div class="app-container">
    <div class="row no-gutters flex-grow bg">
      <div id="particles"></div>
      <div class="col-md-8">
        <div class="jumbotron">
          <h1 class="title">
            Share your moments, stories and news with
            <span class="logo">
              <span class="logo__text">share.it</span>
              <svg class="logo__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                version="1.1" width="24px" height="24px">
                <g id="surface1">
                  <path d="M 18 2 C 16.34375 2 15 3.34375 15 5 C 15 5.195313 15.027344 5.375 15.0625 5.5625 L 7.9375 9.71875 C 7.414063 9.273438 6.742188 9 6 9 C 4.34375 9 3 10.34375 3 12 C 3 13.65625 4.34375 15 6 15 C 6.742188 15 7.414063 14.726563 7.9375 14.28125 L 15.0625 18.4375 C 15.027344 18.625 15 18.804688 15 19 C 15 20.65625 16.34375 22 18 22 C 19.65625 22 21 20.65625 21 19 C 21 17.34375 19.65625 16 18 16 C 17.257813 16 16.585938 16.273438 16.0625 16.71875 L 8.9375 12.5625 C 8.972656 12.375 9 12.195313 9 12 C 9 11.804688 8.972656 11.625 8.9375 11.4375 L 16.0625 7.28125 C 16.585938 7.726563 17.257813 8 18 8 C 19.65625 8 21 6.65625 21 5 C 21 3.34375 19.65625 2 18 2 Z "
                  />
                </g>
              </svg>
            </span>
          </h1>
          <p class="subtitle">
            Share.it connects everyone worldwide. Get the most recent news, meet new people and keep in touch with friends!
          </p>
          <a class="mobile-app-link" href="#">
            <img class="mobile-app-logo" src="../assets/png/play-market.png" alt="share.it play market app">
          </a>
          <a class="mobile-app-link" href="#">
            <img class="mobile-app-logo" src="../assets/png/app-store.png" alt="share.it app store app">
          </a>
        </div>
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
  import Login from '@/components/authPage/Login'
  import Register from '@/components/authPage/Register'
  import Footer from '@/components/_common/Footer'

  import particlesConfig from '@/assets/json/particles.config.json'

  export default {
    components: {
      Login,
      Register,
      Footer
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

  .jumbotron {
    margin: auto;
    max-width: 64ch;
    padding: 95px 0;
    color: #fff;
    z-index: 2;
  }

  .mobile-app-link {
    display: inline-block;
    height: 4rem;
    margin-top: 1rem;
    margin-right: 0.5rem;
    color: #fff;
    opacity: 0.8;
    transition: opacity .3s;
  }

  .mobile-app-link:hover {
    opacity: 0.95;
  }

  .mobile-app-logo {
    width: auto;
    height: 100%;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .logo {
    position: relative;
    color: #fff;
  }

  .logo__svg {
    width: 37px;
    height: 37px;
    position: absolute;
    fill: #fff;
    left: 102%;
    top: 52%;
    transform: translateY(-50%);
  }

  .mr-auto {
    margin-right: auto;
    margin-left: 5rem;
  }


  .title {
    font-size: 3.2rem;
    font-weight: 500 !important;
    line-height: 1.22;
    letter-spacing: -1.2px;
    margin: 0;
    margin-bottom: 2.8rem;
  }

  .subtitle {
    font-size: 1.62rem;
    line-height: 1.32;
    font-weight: 500 !important;
    word-spacing: 0.52px;
  }
</style>
