<style scoped lang="scss" src="./login.scss"></style>
<template src="./login.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../../services/userService'

@Component
export default class Login extends Vue {
  email = ''
  password = ''
  submitted = false
  $validator: any
  createPasswordSwitch = 'password'
  profilepic: any
  switchPasswordType() {
    this.createPasswordSwitch =
      this.createPasswordSwitch === 'password' ? 'text' : 'password'
  }
  created() {
    localStorage.clear()
  }
  login() {
    this.submitted = true
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.submitted = false
        let data = {
          email: this.email,
          password: this.password,
        }
        UserService.loginUser(data).then((data) => {
          console.log(JSON.stringify(data))
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
              console.log(JSON.stringify(data.data.status))
              localStorage.setItem('bearerToken', data.data.access_token)
              localStorage.setItem('profileImage',data.data.profile_pic)
              this.$router.push('/developersList')
            } else {
              alert('Could not Login')
            }
          }
        })
      }
    })
  }
}
</script>
