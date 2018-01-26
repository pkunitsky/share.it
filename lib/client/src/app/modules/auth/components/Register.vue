<template>
  <v-card
    class="Register AuthPage-form"
    elevation-1>
    <v-card-title class="light-blue darken-2 white--text">
      <span class="headline">Register</span>
    </v-card-title>
    <v-form
      @submit.prevent="onSubmit"
      v-model="valid">
      <v-card-text>
        <v-text-field
          label="Full name"
          v-model="fullname"
          :rules="fullnameRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="passwordRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-text-field
          label="Confirm Password"
          v-model="confirmPassword"
          type="password"
          :rules="confirmPasswordRules"
          validate-on-blur
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          type="submit"
          color="light-blue darken-2 white--text"
          :loading="requestPending"
          :disabled="requestPending">
          Register
        </v-btn>  
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  import AuthService from '@/services/AuthService'
  import notify from '@/utils/notify'

  export default {
    data: () => ({
      valid: false,
      requestPending: false,
      fullname: '',
      fullnameRules: [
        (v) => !!v || 'Please, enter your full name'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'Please enter a valid email address'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be not less than 6 characters'
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        (v) => !!v || 'Make sure you remember your password',
        (v) => (v === this.password) || 'Passwords should match'
      ]
    }),
    methods: {
      onSubmit () {
        this.requestPending = true
        AuthService
          .register({
            fullname: this.fullname,
            email: this.email,
            password: this.password
          })
          .then(res => {
            const name = res.data.fullname.split(' ')[0]
            this.requestPending = false
            notify(`Account is registered`)
          })
          .catch(err => {
            const msg = err.response.data.error || err.toString()
            this.requestPending = false
            notify(msg)
          })
      }
    }
  }
</script>
