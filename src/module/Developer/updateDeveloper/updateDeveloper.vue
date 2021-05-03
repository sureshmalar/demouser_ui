<style scoped lang="scss" src="./updateDeveloper.scss"></style>
<template src="./updateDeveloper.html"></template>

<script lang="ts">
import { Constant } from '@/helpers/constant'
import { Developers } from '@/model/developers'
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../../services/userService'

@Component
export default class UpdateDeveloper extends Vue {
  developers: Developers = new Developers()
  submitted = false
  $validator: any
  userid: any
  formData = new FormData()
  fileBaseURL=Constant.SERVER_URL
  created() {
    this.userid = localStorage.getItem('devId')
    console.log(this.userid)
    if (this.userid != null && this.userid != '') {
      this.getUserDataByid()
    }
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
        alert('Profile Pic only accepts jpg, jpeg and png file format')
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

  getUserDataByid() {
    console.log(this.userid)
    this.submitted = true

    UserService.getUserById(this.userid).then((data) => {
      if (data != undefined && data.data != undefined) {
        if (data.data.status == 200) {
          this.developers = data.data.data.result
          console.log(this.developers)
        } else {
          alert('Data not found')
        }
      }
    })
  }
  home() {
    this.$router.push('/developersList')
  }

  logout() {
    localStorage.clear()
    this.$router.push('/')
  }
  updateUser() {
    this.submitted = true
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.submitted = false
        this.formData.append('id',''+this.developers.id)
        this.formData.append('first_name',this.developers.first_name)
        this.formData.append('last_name',this.developers.last_name)
        this.formData.append('password', this.developers.password)
        this.formData.append('phone_number',this.developers.phone_number)
        this.formData.append('email',this.developers.email)
        this.formData.append('address',this.developers.address)
        UserService.updateUser(this.formData).then((data) => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
              alert('Developer Updated Successfully')
            } else {
              alert('Developer not Updated')
            }
          }
        })
      }
    })
  }
}
</script>
