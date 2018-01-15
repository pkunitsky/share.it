<template>
  <div class="chat-wrapper">
    <ul class="chat">
      <li class="msg" v-for="msg in 10">
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
    <form class="chat-form">
      <div>
        <label for="comment" class="f6 b db mb2">Comments <span class="normal black-60">(optional)</span></label>
        <textarea id="comment" class="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
        <small class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small>
      </div>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .chat-wrapper {
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .chat {
    list-style: none;
    padding: 0;
    margin: 0;
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

  /* tachyons component: textarea-label */
  /* http://tachyons.io/components/forms/textarea-label/index.html */
  .border-box {
    box-sizing: border-box;
  }
  .ba {
    border-style: solid;
    border-width: 1px;
  }
  .b--black-20 {
    border-color: rgba(0, 0, 0, .2);
  }
  .br2 {
    border-radius: .25rem;
  }
  .db {
    display: block;
  }
  .normal {
    font-weight: normal;
  }
  .b {
    font-weight: bold;
  }
  .link {
    text-decoration: none;
      transition: color .15s ease-in;
  }
  .link:link, .link:visited {
    transition: color .15s ease-in;
  }
  .link:hover {
    transition: color .15s ease-in;
  }
  .link:active {
    transition: color .15s ease-in;
  }
  .link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }
  .w-100 {
    width: 100%;
  }
  .black-80 {
    color: rgba(0, 0, 0, .8);
  }
  .black-60 {
    color: rgba(0, 0, 0, .6);
  }
  .hover-black:hover {
    color: #000;
  }
  .hover-black:focus {
    color: #000;
  }
  .hover-blue:hover {
    color: #408bc9;
  }
  .hover-blue:focus {
    color: #408bc9;
  }
  .pa2 {
    padding: .5rem;
  }
  .pa4 {
    padding: 2rem;
  }
  .mb2 {
    margin-bottom: .5rem;
  }
  .underline {
    text-decoration: underline;
  }
  .f6 {
    font-size: .875rem;
  }
</style>
