<style scoped lang="scss" src="./registration.scss"></style>
<template src="./registration.html"></template>

<script lang="ts">
import { Developers } from '@/model/developers'
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../../services/userService'
@Component
export default class Registration extends Vue {
  developers: Developers = new Developers()
  submitted = false
  $validator: any
  image: any
  formData = new FormData()
  createPasswordSwitch = 'password'
  switchPasswordType() {
    this.createPasswordSwitch =
      this.createPasswordSwitch === 'password' ? 'text' : 'password'
  }

  onUpload(event) {
    for (const file of event.files) {
      this.formData.append("profile_pic",file)
      this.formData.append("image_name",file.name)
      let fileNameArray = file.name.split('.')
      if (file.size >= 1000000) {
        alert('File size exceeds')
      } else if (
        fileNameArray[fileNameArray.length - 1] != 'jpg' &&
        fileNameArray[fileNameArray.length - 1] != 'jpeg' &&
        fileNameArray[fileNameArray.length - 1] != 'png'
      ) {
        alert('Image only accepts jpg, jpeg and png file format')
      } else {
        this.developers.image_name = file.name
        const reader = new FileReader()
        reader.onload = this.readProfilePic.bind(this)
        reader.readAsBinaryString(file)
      }
    }
  }
  readProfilePic(readerEvt) {
    const binaryString = readerEvt.target.result
    this.developers.profile_pic = btoa(binaryString)
  }
  registerDeveloper() {
    this.submitted = true
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.submitted = false
        for (var pair of this.formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        this.formData.append('first_name',this.developers.first_name)
        this.formData.append('last_name',this.developers.last_name)
        this.formData.append('password', this.developers.password)
        this.formData.append('phone_number',this.developers.phone_number)
        this.formData.append('email',this.developers.email)
        this.formData.append('address',this.developers.address)

UserService.registerUser(this.formData).then((data) => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
              alert('User Registered Successfully')
              this.$router.push('/login')
            } else {
              alert('User not Registered')
            }
          }
        })
      }
    })
  }
}
</script>
