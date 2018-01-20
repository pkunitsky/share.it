<template>
  <div class="Footer">
    <v-container fluid class="util-container-fluid--narrow">
      <nav class="Footer-nav">
          <a class="Footer-nav__item" href="#">About</a>
          <a class="Footer-nav__item" href="#">Help Center</a>
          <a class="Footer-nav__item" href="#">Blog</a>
          <a class="Footer-nav__item" href="#">Status</a>
          <a class="Footer-nav__item" href="#">Jobs</a>
          <a class="Footer-nav__item" href="#">Terms</a>
          <a class="Footer-nav__item" href="#">Privacy Policy</a>
          <a class="Footer-nav__item" href="#">Cookies</a>
          <a class="Footer-nav__item" href="#">Ads info</a>
          <a class="Footer-nav__item" href="#">Brand</a>
          <a class="Footer-nav__item" href="#">Apps</a>
          <a class="Footer-nav__item" href="#">Advertise</a>
          <a class="Footer-nav__item" href="#">Marketing</a>
          <a class="Footer-nav__item" href="#">Business</a>
          <a class="Footer-nav__item" href="#">Developers</a>
          <a class="Footer-nav__item" href="#">Settings</a>
      </nav>
      <div class="Footer-copy">
        <span class="Footer-nav__item">&copy; 2018 Share.it</span>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
  .Footer {
    border-top: 1px solid #e6ecf0;
    background: #fff;
  }
  .Footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .Footer-nav__item {
    display: inline-block;
    padding: 0 11px;
    word-spacing: 1px;
    letter-spacing: 0.04px;
    color: #999;
    line-height: 26px;
    font-size: 12px;
    font-weight: 500;
  }
  a.Footer-nav__item {
    font-size: 12px;
    font-weight: 500;
    color: #0070c9;
    text-decoration: none;
  }
  a.Footer-nav__item:hover {
    text-decoration: underline !important;
  }
  .Footer-copy {
    text-align: center;
    margin-top: 5px;
  }
  .util-container-fluid--narrow {
    padding: 9px 6px;
  }
</style>
