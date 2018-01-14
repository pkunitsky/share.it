<template>
  <div class="chat">
    <ul class="chat__body">
      <li class="chat__msg msg">
        <div class="msg__left">
          <img class="left__thumbnail" src="../../assets/png/profile.png" alt="profile image" />
        </div>
        <div class="msg__body">
          <div>my chat message</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  .chat {
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  .chat__body {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .chat__msg {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .msg {
    display: flex;
  }
  .msg__left {
    width: 50px;
    margin-right: 12px;
  }
  .msg__body {

  }
</style>
