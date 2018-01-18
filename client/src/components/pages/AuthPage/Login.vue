<template>
  <v-card
    class="Login AuthPage-form"
    elevation-1>
    <v-card-title class="primary white--text">
      <span class="headline">Log In</span>
    </v-card-title>
    <v-form
      @submit.prevent="onSubmit"
      v-model="valid">
      <v-card-text>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="passwordRules"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat>
          Google+
        </v-btn>
        <v-btn
          type="submit"
          color="primary">
          log in
        </v-btn>  
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    data () {
      return {
        valid: false,
        error: null,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ]
      }
    },
    methods: {
      onSubmit () {
        AuthService
          .login({
            email: this.email,
            password: this.password
          })
          .then(res => {
            const { user, token } = res.data

            if (!user && !token) {
              console.log(res.data)
              return
            }

            this.$store.commit('setUser', user)
            this.$store.commit('setToken', token)
          })
          .catch(err => this.notify('error', err.toString()))
      },
      watch: {
        error (err) {
          if (err) {
            err.toString()
          }
        }
      }
    }
  }
</script>
