import Vue from 'vue'
import VueImg from 'v-img'

const config = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: true,
  // Show thumbnails for all groups with more than 1 image
  thumbnails: true
}

Vue.use(VueImg, config)
