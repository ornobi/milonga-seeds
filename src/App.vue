<template>
<v-app class="grey lighten-3"> 
  <div id="app">
     <topbanner> </topbanner>
     <router-view> </router-view>
  </div>
  </v-app>
</template>
<script>
import Vue from 'vue'
import{mapState} from 'vuex'
import topbanner from './components/topbanner.vue'
import VideoBg from 'vue-videobg'

Vue.component('video-bg', VideoBg)

export default {
  name: 'app',
  mounted(){this.$store.dispatch('loadAPI')},
  data() {
    return {  
  

}},
  components: {
    topbanner,


  },
  computed: {
    ...mapState(['products'])
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
