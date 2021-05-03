<template>
  <div class="container-fluid px-0" style="height: 100%;">
    <div id="bodyContent" style="height: 100%;">
      <!--<Header :routePath="routePath" />-->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './module/header/header.vue'
@Component({
  components: {
    Header: Header,
  },
})
export default class App extends Vue {
  routePath = ''
  beforeUpdate() {
    this.routePath = this.$router.currentRoute.path
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100% !important;
  margin: 0;
  background-color: #fff;
}
</style>
