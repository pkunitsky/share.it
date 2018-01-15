<template>
  <div class="mdl-grid">
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-color--blue-500">
        <h2 class="mdl-card__title-text mdl-color-text--white">Login</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid">
        <form @submit.prevent="onSubmit">
  
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label
              class="mdl-textfield__label mdl-color-text--grey"
              for="#loginEmail">
              Email
            </label>
            <input
              class="mdl-textfield__input"
              type="text"
              id="loginEmail"
              v-model="loginEmail" />
          </div>
  
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label
              class="mdl-textfield__label mdl-color-text--grey"
              for="#loginPassword">
              Password
            </label>
            <input
              class="mdl-textfield__input"
              type="password"
              id="loginPassword"
              v-model="loginPassword" />
          </div>
  
          <div class="mdl-cell mdl-cell--12-col">
            <button
              @click.prevent="() => null"
              class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-color-text--grey-600">
              Login with Google
            </button>
            <button
              type="submit"
              class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService'
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        loginEmail: null,
        loginPassword: null
      }
    },
    methods: {
      ...mapMutations(['setToken']),
      onSubmit () {
        AuthService
          .login({
            email: this.loginEmail,
            password: this.loginPassword
          })
          .then(res => {
            if (res.status === 200) {
              this.setToken(res.data.token)
              this.$router.push('/')
            }
          })
      }
    }
  }
</script>
