<template>
  <div class="mdl-grid">
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-color--blue-500">
        <h2 class="mdl-card__title-text mdl-color-text--white">Create a New Account</h2>
      </div>
  
      <div class="mdl-card__supporting-text mdl-grid">
        <form @submit.prevent="onSubmit" autocomplete="off">
  
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label class="mdl-textfield__label mdl-color-text--grey" for="#registerEmail">Email</label>
            <input class="mdl-textfield__input" type="email" id="registerEmail" v-model="registerEmail" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            />
            <span class="mdl-textfield__error">Not valid email</span>
          </div>
  
          <div
            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label
              class="mdl-textfield__label mdl-color-text--grey"
              for="textfield_new_password">Password</label>
            <input
              class="mdl-textfield__input"
              type="password"
              id="textfield_new_password"
              v-model="registerPassword"
              pattern="^.{8,32}$"
            />
            <span class="mdl-textfield__error">
              Password should be at least 6 and not more than 32 characters long
            </span>
          </div>
  
          <div
            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col"
            v-bind:class="classObject">
            <label
              class="mdl-textfield__label mdl-color-text--grey"
              for="#textfield_password_confirm">
              Password Confirm
            </label>
            <input
              class="mdl-textfield__input"
              type="password"
              id="textfield_password_confirm"
              v-model="registerPasswordConfirm"
            />
            <span class="mdl-textfield__valid">
              Passwords match!
            </span>
          </div>
  
          <div class="mdl-cell mdl-cell--12-col send-button">
            <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    data () {
      return {
        registerEmail: null,
        registerPassword: '',
        registerPasswordConfirm: ''
      }
    },
    computed: {
      passwordsMatch () {
        if (this.registerPassword === '' || this.registerPasswordConfirm === '') {
          return false
        } else {
          return this.registerPassword === this.registerPasswordConfirm
        }
      },
      classObject () {
        return {
          'is-valid': this.passwordsMatch,
          'is-dirty': this.registerPasswordConfirm !== ''
        }
      }
    },
    methods: {
      onSubmit () {
        AuthService
          .register({
            email: this.registerEmail,
            password: this.registerPassword
          })
          .catch(err => console.log(err.toString()))
          .then(res => {})
      }
    }
  }
</script>
