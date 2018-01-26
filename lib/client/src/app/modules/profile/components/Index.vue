<template>
  <v-layout row wrap>
    <v-flex md4>
      <ProfileCard />
    </v-flex>
    <v-flex md8>
      <MiniChat />
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import MiniChat from './MiniChat'
  import ProfileCard from './ProfileCard'

  export default {
    components: {
      MiniChat,
      ProfileCard
    }
  }
</script>
