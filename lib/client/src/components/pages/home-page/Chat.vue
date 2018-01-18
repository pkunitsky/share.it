<template>
  <div class="chat">
    <ul class="chat__body">
      <li class="msg" v-for="msg in 5">
        <div class="msg__left">
          <img class="msg__thumbnail" src="/static/png/profile.png">
        </div>
        <div class="msg__body">
          <div class="msg__details details">
            <a class="details__user" href="#">John Doe</a>
            <span class="details__date">• 2:27 pm</span>
          </div>
          <div class="msg__text">
            Hi everyone!
          </div>
        </div>
      </li>
    </ul>
    <form
      @submit.prevent="onSubmit"
      class="chat-form">
      <v-text-field
        @keyup.enter="onSubmit"
        class="chat-form__textfield"
        placeholder="Type your message"
        v-model="message"
        full-width
        multi-line
      ></v-text-field>
      <v-btn icon>
        <v-icon>attach_file</v-icon>
      </v-btn>
      <v-btn
        type="submit"
        round color="primary"
        :loading="requestPending"
        :disabled="requestPending">
        <span slot="loader">Sending..</span>
        send it
      </v-btn>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import io from 'socket.io-client'
  const socket = io(process.env.DOMAIN)

  export default {
    computed: {
      ...mapState(['messages'])
    },

    data () {
      return {
        requestPending: false,
        message: null
      }
    },

    methods: {
      ...mapMutations(['saveMessage']),
      onSubmit () {
        if (!this.message) return

        this.requestPending = true

        socket.on('connection', _ => {
          // loading
        })

        socket.emit('message:sent', {
          userID: this.$store.state.user._id,
          message: this.message
        })
        socket.on('message:sent', _ => {
          this.saveMessage('')
        })

        socket.on('message:received', _ => {
          this.message = null
          this.requestPending = false
        })
        
        socket.on('messages')
      }
    }
  }
</script>

<style>
  .chat {
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .chat__body {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-x: auto;
  }
  .chat-form {
    border-top: 1px solid #d8d8d8;
    padding: 5px 12px;
    background: #F2F5F8;
  }
  .chat-form__textfield {
    resize: none;
    width: 100%;
    border: none;
    padding: 10px 20px;
    font-size: 12px !important;
    line-height: 22px;
    border-radius: 5px;
    margin-top: 5px;
    background: #fff;
  }

  .msg {
    display: flex;
    padding: 6px;
  }
  .msg__left {
    width: 50px;
    margin-right: 12px;
  }
  .msg__thumbnail {
    width: 100%;
    height: auto;
  }
  .msg__body {
    flex-grow: 1;
  }
  .msg__text {
    line-height: 1.5;
    max-width: 64ch;
    font-size: 12px;
  }

  .details {
    font-size: 12px;
  }
  .details__user {
    font-weight: 600;
  }
  .details__date {
    color: rgba(0,0,0, 0.32);
  }
</style>
