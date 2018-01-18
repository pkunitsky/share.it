<template>
  <div class="container-fluid">
    <div class="row flex-grow">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <Chat/>
      </div>
    </div>
  </div>
</template>

<script>
  import Chat from './Chat'

  export default {
    name: 'HomePage',
    components: {
      Chat
    }
  }
</script>
