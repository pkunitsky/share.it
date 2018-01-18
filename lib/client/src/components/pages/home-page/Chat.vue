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
      <textarea
        class="chat-form__textarea"
        rows="2"
        placeholder="Type your message">
      </textarea>
      <v-btn
        type="submit"
        round color="primary"
        :loading="requestPending"
        :disabled="requestPending">
        send it
      </v-btn>
      <v-btn icon>
        <v-icon>attach_file</v-icon>
      </v-btn>
    </form>
  </div>
</template>

<script>
  import ChatService from '@/services/ChatService'
  import io from 'socket.io-client'
  const socket = io(process.env.DOMAIN)

  export default {
    data () {
      return {
        requestPending: false
      }
    },

    methods: {
      onSubmit () {
        ChatService
          .sendMessage()
      }
    },
    created () {
      socket.on('connect', () => {
        console.log('connected to server')
      })
      socket.on('disconnect', () => {
        console.log('disconnected from server')
      })
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
  .chat-form__textarea {
    resize: none;
    width: 100%;
    border: none;
    padding: 10px 20px;
    font-size: 12px;
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
