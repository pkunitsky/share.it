<template>
  <v-layout style="overflow: hidden;">
    <v-flex
      :md4="activeTalkIndex !== null"
      :md5="activeTalkIndex === null"
      style="transition: all 0.4s">
      <v-card>
        <v-toolbar
          :dark="$store.state.settings.nightMode"
          :color="$store.state.settings.nightMode ? null:'white'">
          <v-text-field solo prepend-icon="search" placeholder="Search" class="toolbar__textfield"></v-text-field>
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-list three-line>
          <template v-for="(talk, i) in talks">
            <v-list-tile avatar :key="talk.with" @click="activeTalkIndex = i">
              <v-list-tile-avatar>
                <img :src="talk.thumbnail" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="talk.with" />
                <v-list-tile-sub-title v-html="talk.msgs[talk.msgs.length - 1].text" />
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="i + 1 !== talks.length" inset />
          </template>
        </v-list>
      </v-card>
    </v-flex>

    <transition name="fade">
      <v-flex v-if="activeTalkIndex !== null">
        <v-card height="100%; overflow: hidden;">
          <div
            class="chat-wrapper fill-height"
            :class="{'chat-wrapper--active': j === activeTalkIndex}"
            v-for="(talk, j) in talks"
            :key="talk.with + j">
            <v-toolbar class="chat-header grey--text" :dark="$store.state.settings.nightMode" :color="$store.state.settings.nightMode ? null:'white'">
              With: <span :class="$store.state.settings.nightMode ? 'white--text':'black--text'">{{ talks[activeTalkIndex].with }}</span>
              <v-spacer />
              <v-btn icon @click="activeTalkIndex = null">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>
            <ul class="chat scrollable px-4">
              <template
                v-if="talk.msgs"
                v-for="(msg, i) in talk.msgs">
                <div class="chat-divider grey--text" v-if="i === 0 || (talk.msgs[i-1] && msg.dateSent.diff(talk.msgs[i-1].dateSent, 'hours') > 2)">
                  <span>{{ msg.dateSent | time }}</span>
                </div>
  
                <li
                  :key="i"
                  class="msg"
                  :style="{ 'animation-name': msg.from ? 'slideFromLeft':'slideFromRight' }"
                  :class="msg.from ? 'msg--left':'msg--right'">
                  <img class="msg__avatar" :src="msg.avatar">
                  <div class="msg__bubble">
                    {{ msg.text }}
                  <svg class="msg__corner" viewBox="0 0 887.64 896.11">
                    <path  fill="#eceff1" d="M6.18,1.94C213.45,715.79,893.82,811.8,893.82,811.8S442.56,963.52,114.1,864.51C68.22,850.68,33,837.93,6.49,826.23a1.21,1.21,0,0,1-.31-.66V1.94Z"
                      transform="translate(-6.18 -1.94)" />
                  </svg>
                  </div>
                </li>
              </template>
            </ul>
            <form @submit.prevent="onSubmit" class="chat-form">
              <v-btn icon>
                <v-icon>attach_file</v-icon>
              </v-btn>
              <input class="chat-form__input" v-model="msgToSend" type="text" placeholder="Type a message" />
              <v-btn icon type="submit">
                <v-icon>send</v-icon>
              </v-btn>
            </form>
          </div>
        </v-card>
      </v-flex>
    </transition>
  </v-layout>
</template>

<script>
  import moment from 'moment'

  export default {
    filters: {
      time (v) {return v.fromNow()}
    },

    methods: {
      onSubmit () {
        this.talks[this.activeTalkIndex].msgs.push({
          avatar: "/static/png/ali--128x128.png",
          text: this.msgToSend,
          dateSent: moment(),
          seen: false
        })
        this.msgToSend = null
      }
    },

    data: () => ({
      activeTalkIndex: null,
      msgToSend: null,
      talks: [
        {
          with: "Thomas Bangalter",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          msgs: [
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "hello",
              dateSent: moment('2017-02-08 09:35:26'),
              seen: true
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "It\'s me.",
              dateSent: moment('2017-02-08 09:35:50'),
              seen: false
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "Just wondering.. Is it still a thing?",
              dateSent: moment('2017-02-08 09:36:26'),
              seen: false
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "I mean you and Britta",
              dateSent: moment('2018-01-25 10:37:26'),
              seen: false
            },
          ]
        },
        {
          with: "John Doe",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          msgs: [
            {
              from: "John Doe",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
              text: "A-yo, what is gucci, ma man?",
              dateSent: moment('2017-02-08 09:40:26'),
              seen: false
            },
            {
              from: "John Doe",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
              text: "Can I come to party? It's gonna be lit!!",
              dateSent: moment('2017-02-08 09:40:29'),
              seen: false
            },
          ]
        },
        {
          with: "Jane Winslet",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          msgs: [
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "Oh my gosh, I just saw the pictures.. This place is awesome! :)",
              dateSent: moment('2017-02-08 09:44:30'),
              seen: true,
            },
            {
              avatar: "/static/png/ali--128x128.png",
              text: "Why don't we go there someday?",
              dateSent: moment('2017-02-08 09:44:29'),
              seen: false,
            },
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "That would be great",
              dateSent: moment('2017-02-08 09:45:32'),
              seen: false
            },
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "Hey, do you have any plans for tommorow night?",
              dateSent: moment('2017-02-08 09:45:32'),
              seen: false
            }
          ]
        },
        {
          with: "Britta Holt",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
          msgs: [
            {
              from: "Britta Holt",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
              text: "How is it going, bruh?",
              dateSent: moment('2017-02-08 09:48:29'),
              seen: false
            },
            {
              avatar: "/static/png/ali--128x128.png",
              text: "Damn, girl. Doin good )",
              dateSent: moment('2017-02-08 09:49:32'),
              seen: false
            },
            {
              from: "Britta Holt",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
              text: "Wanna hangout sometime or what?",
              dateSent: moment('2017-02-08 09:49:32'),
              seen: false
            }
          ]
        }
      ],
    })
  }
</script>

<style>
  .chat-wrapper {
    display: none;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 700px;
  }
  .chat-wrapper--active { display: flex }

  .chat-header {
    display: flex;
    align-items: center;
    padding-left: 12px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0,0,0, 0.12);
  }
  .chat {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .chat-divider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 27px 0;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
  }
  .chat-divider span::after,
  .chat-divider span::before {
    display: inline-block;
    position: absolute;
    content: '';
    top: 10px;
    width: 30%;
    height: 1px;
    background-color: #e6e6e6;
  }
  .chat-divider span::before {left: 0}
  .chat-divider span::after {right: 0}
  .chat-form {
    display: flex;
    margin: 12px auto;
    border: 1px solid #e6e6e6;
    background-color: #eceff1;
    width: calc(100% - 58px);
    border-radius: 5px;
  }
  .chat-form__input {
    flex: 1;
  }
  .chat-form__input:focus::placeholder {
    color: rgb(160, 160, 160);
  }
  .msg {
    font-size: 16px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 9px;
    vertical-align: top;
    flex: 0 0 auto;
  }
  .msg__bubble {
    position: relative;
    padding: 13px 14px;
    border-radius: 5px;
  }
  .msg__avatar {
    border-radius: 100%;
    width: 36px;
    height: auto;
  }
  .msg__corner {
    position: absolute;
    width: 9px;
    height: 9px;
    bottom: 4px;
  }

  /* some complex css skills right there */
  .msg--left + .msg--right {
    margin-top: 16px;
  }
  .msg--right + .msg--left {
    margin-top: 16px;
  }

  .msg {
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  @keyframes slideFromLeft {
    0% { transform: translateX(-120px); opacity: 0 }
    100% { transform: translateX(0); opacity: 1 }
  }
  @keyframes slideFromRight {
    0% { transform: translateX(120px); opacity: 0 }
    100% { transform: translateX(0); opacity: 1 }
  }
  
  .msg--left {margin-left: 0; margin-right: auto}
  .msg--left .msg__bubble {background-color: #eceff1}
  .msg--left .msg__avatar {margin-right: 8px}
  .msg--left .msg__corner {left: -7px; transform: scale(-1.2, 1.4)}

  /* bluish color #00b0ff */

  .msg--right {margin-right: 0; margin-left: auto}
  .msg--right .msg__bubble {background-color: #eceff1}
  .msg--right .msg__avatar {margin-left: 8px; order: 2}
  .msg--right .msg__corner {right: -7px; transform: scale(1.2, 1.4)}
</style>
