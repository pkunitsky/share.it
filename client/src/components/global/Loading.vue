<template>
  <div
    v-if="type === 'spinner'">
  </div>

  <div
    v-else  
    class="loading-dots">
    <span>•</span>
    <span>•</span>
    <span>•</span>  
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'dots'
      }
    }
  }
</script>

<style scoped>
  .loading-dots {
    font-size: 40px;
  }
  .loading-dots span {
    font-size: 50px;
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
  .loading-dots span:nth-child(2) {
    animation-delay: .2s;
  }
  .loading-dots span:nth-child(3) {
    animation-delay: .4s;
  }
  
  @keyframes blink {
    0% { opacity: 0.2; }
    20% { opacity: 1; }
    100% { opacity: 0.2; }
  }
</style>
