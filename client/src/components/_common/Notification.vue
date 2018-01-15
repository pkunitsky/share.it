<template>
  <div
    class="alert"
    :class="">

  </div>
</template>

<script>
  export default {
    props: {
      type: String
    },
    computed: {
      modifier: `alert--${this.type}`
    }
  }
</script>
