<style lang="scss" src="./header.scss"></style>
<template src="./header.html"></template>

<script lang="ts">
import { Constant } from '@/helpers/constant'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop({ default: [] })
  routePath: string
  menuItem = []
  homeMenu = []
  token: any
  currentUrl: any
  fileBaseURL=Constant.SERVER_URL
  created() {
    this.token = localStorage.getItem('bearerToken')

    this.currentUrl = window.location.pathname
    console.log(this.currentUrl)

    if (this.token != null && this.token != undefined && this.token != '') {
      this.homeMenu = [
        {
          label: 'Home',
          to: '/developersList',
        },
        {
          label: 'Logout',
          to: '/',
        },
      ]
    } else {
    }
  }

  logout() {
    localStorage.clear()
    this.$router.push('/')
  }
}
</script>
