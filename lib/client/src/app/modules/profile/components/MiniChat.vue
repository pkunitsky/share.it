<template>
  <v-card>
    <v-tabs grow :scrollable="false">
      <v-tabs-bar :dark="$store.state.settings.nightMode" :color="$store.state.settings.nightMode ? null:'white'">
        <v-tabs-slider :color="$store.state.settings.nightMode ? 'white':'grey'" />
        <v-tabs-item v-for="(tab, i) in tabs" :key="i" :href="'#tab-' + i">
          {{ tab.title }}
        </v-tabs-item>
      </v-tabs-bar>

      <v-tabs-items>
        <v-tabs-content v-for="(tab, i) in tabs" :key="i" :id="'tab-' + i">
          <v-card>
            <v-toolbar :dark="$store.state.settings.nightMode" :color="$store.state.settings.nightMode ? null:'white'">
              <v-text-field solo prepend-icon="search" placeholder="Search" class="toolbar__textfield"></v-text-field>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list three-line>
              <template v-for="item in items">
                <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset"></v-divider>
                <v-list-tile avatar v-else :key="item.title" @click="">
                  <v-list-tile-avatar>
                    <img :src="item.avatar" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      tabs: [
        {title: 'talks'},
        {title: 'new talk'}
      ],
      items: [
        {
          header: 'Today'
        },
        {
          avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='grey--text darken-4'>Ali Conners</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='grey--text'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='grey--text'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://vuetifyjs.com/static/doc-images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='grey--text'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://vuetifyjs.com/static/doc-images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='grey--text'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })
  }
</script>
