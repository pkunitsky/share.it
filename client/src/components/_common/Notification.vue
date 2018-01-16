<template>
  <div
    class="alert"
    :class="modifier">
    {{ message }}
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      },
      message: String
    },
    computed: {
      modifier: `alert--${this.type}`
    }
  }
</script>
