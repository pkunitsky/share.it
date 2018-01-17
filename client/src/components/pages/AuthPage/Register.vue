<template>
  <v-card
    class="Register AuthPage-form"
    elevation-1>
    <v-card-title class="primary white--text">
      <span class="headline">Register</span>
    </v-card-title>
    <v-form
      @submit.prevent="onSubmit"
      v-model="valid">
      <v-card-text>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="passwordRules"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          type="submit"
          color="primary">
          Register
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
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'Please enter a valid email address'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 6 || 'Name must be less than 6 characters'
        ]
      }
    },
    methods: {
      onSubmit () {
        AuthService
          .register({
            email: this.email,
            password: this.password
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          }).prevent
      }
    }
  }
</script>
