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
        v-model="message"
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
  import io from 'socket.io-client'
  import moment from 'moment'
  import {mapState} from 'vuex'
  import notify from '@/utils/notify'

  export default {
    data () {
      return {
        chats: [],
        socket: null,
        message: null,
        requestPending: false,
      }
    },

    filters: {
      time (v) {
        return moment(v).fromNow()
      }
    },

    computed: {
      ...mapState(['user']),
      messages: {
        get () {return this.$store.state.messages},
        set (v) {this.$store.commit('messages', v)}
      }
    },

    methods: {
      onSubmit () {
        if (!this.message) return

        this.message = null
        const msg = {
          from: 'Me',
          text: this.message,
          dateSent: moment()
        }
        
        this.$store.state.messages.push(msg)
        this.socket.emit('broadcast', {
          emitName: 'msg:sent',
          emitData: {
            ...msg,
            from: this.user._id
          }
        })
      },

      onJoin (chatID) {
        const chatIndex = this.chats.findIndex(chat => chat._id === chatID)
        const chatID = this.chats[chatIndex]._id

        this.socket.emit('broadcast', {
          emitName: 'chat:user-joined',
          emitData: chatID
        })
      }
    },

    created () {
      // connect
      this.socket = io(`${process.env.DOMAIN}?userID=${this.user._id}`)

      // register event listeners
      this.socket.on('chats', chats => this.chats = chats)
      this.socket.on('chats:404', err => notify(err))


      this.socket.on('chat:user-joined', ({chat, user}) => {
        const chatIndex = this.chats.findIndex(c => c._id === chat._id)
        if (chatIndex === -1) return

        this.chats[chatIndex].users.push(user)
      })
      this.socket.on('chat:user-left', ({chat, user}) => {
        const chatIndex = this.chats.findIndex(c => c._id === chat._id)
        if (!chatIndex) return

        const userIndex = this.chats[chatIndex].users.findIndex(u => u._id === user._id)
        if (!userIndex) return

        this.chats[chatIndex].users.splice(userIndex, 1)
      })


      this.socket.on('msgs', msgs => this.messages = msgs)
      this.socket.on('msg:sent', msg => this.messages.push(msg))
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
