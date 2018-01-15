<template>
  <div
    class="alert"
    :class="">

  </div>
</template>

<script>
  export default {
    props: ['type'],
    computed: {
      modifier: `alert--${this.type}`
    }
  }
</script>

<style>
  .alert {}
  .alert--danger {}
  .alert--warning {}
  .alert--primary {}
</style>
