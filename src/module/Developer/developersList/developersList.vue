<style scoped lang="scss" src="./developersList.scss"></style>
<template src="./developersList.html"></template>

<script lang="ts">
import { Constant } from '@/helpers/constant'
import { Developers } from '@/model/developers'
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../../services/userService'

@Component
export default class DevelopersList extends Vue {
  developers: Developers[] = []
  page: number = 1
  totalCount: number = 0
  selectedData = []
  rowData = []
  selectedId = {}
  displayBasic: boolean = false
  fileBaseURL=Constant.SERVER_URL
  created() {
    this.listDevelopers()
  }
  listDevelopers() {
    UserService.listUser().then((response) => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          if (
            response.data.data.result != null &&
            response.data.data.result.length > 0
          ) {
            this.developers = response.data.data.result
          }
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

  deleteMultiple() {
    var result = ''

    for (var i = 0; i < this.selectedData.length; i++) {
      var selectedcol = this.selectedData[i].id

      if (i > 0) {
        result += ','
      }
      result += selectedcol
    }

    let data = {
      ids: result,
    }

    UserService.deleteMultipleUser(data).then((response) => {
      if (response != undefined && response.data != undefined) {
        if (response.status == 200) {
          alert('Successfully Deleted')
          this.listDevelopers()
        }
      }
    })
  }

  deleteDeveloper(id: any) {
    var devId = id
    UserService.deleteUser(devId).then((response) => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          alert('Successfully Deleted')
          this.listDevelopers()
        }
      }
    })
  }

  editDeveloper(id) {
    localStorage.setItem('devId', id)
    this.$router.push('/updateDeveloper')
  }

  updateDeveloper(data) {
    UserService.updateUser(data).then((response) => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          alert('Successfully Deleted')
          this.listDevelopers()
        }
      }
    })
  }
}
</script>
