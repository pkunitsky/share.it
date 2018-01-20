<template>
  <div class="chat">
    <ul class="chat__body">
      <li class="msg" v-for="msg in messages" :key="msg.dateSent">
        <div class="msg__left">
          <img class="msg__thumbnail" src="/static/png/profile.png">
        </div>
        <div class="msg__body">
          <div class="msg__details details">
            <a class="details__user" href="#">{{ msg.from }}</a>
            <span class="details__date">• {{ msg.dateSent || time }}</span>
          </div>
          <div class="msg__text">
            {{ msg.text }}
          </div>
        </div>
      </li>
    </ul>
    <form
      @submit.prevent="onSubmit"
      class="chat-form">
      <v-text-field
        @keyup.enter="onSubmit"
        v-model="msg"
        placeholder="Type your message"
        multi-line
        rows="2"
        full-width>
      </v-text-field>
      <v-btn icon>
        <v-icon>attach_file</v-icon>
      </v-btn>
      <v-btn
        type="submit"
        round color="primary">
        send it
      </v-btn>
    </form>
  </div>
</template>

<script>
  // import io from 'socket.io-client'
  import UserService from '@/services/UserService'
  import moment from 'moment'

  export default {
    computed: {
      msgs () {
        const i = this.talks.findIndex(
          t => t.talkName === this.currentTalkName
        )
        if (i === -1) return null

        return this.talks[i].msgs
      }
    },

    data: {
      msg: null,
      socket: null,
      currentTalkName: null,
      talks: []
    },

    methods: {
      onSubmit () {
        this.socket.emit('msg:send', {
          talk: this.currentTalkName,
          msg: this.msg
        })
        this.msg = null
      }
    },

    created () {
      UserService.init()
      this.talks = UserService.getTalks()

      this.socket = io()
      this.socket.on('msg:send', ({talk, msg}) => {
        this.msgs.push(msg)
      })
    }
  }
</script>

<style>
  .chat {
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }
  .chat__body {
    flex: 1;
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
