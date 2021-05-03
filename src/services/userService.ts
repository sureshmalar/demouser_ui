import { Constant } from '@/helpers/constant'
import { Rest, RestHeader } from '@/helpers/rest'
import axios, { AxiosResponse } from 'axios' //npm install axios --save //npm install --save es6-promise For IE

class UserService {
  axios
  constructor() {
    this.axios = axios.create({})
  }
  public loginUser(data: any): Promise<AxiosResponse<any>> {
    return this.axios
      .post(Constant.SERVER_URL + 'api/developers/login', data, {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }
  public registerUser(data: any): Promise<AxiosResponse<any>> {
    return this.axios
      .post(Constant.SERVER_URL + 'api/developers/signup', data, {
        headers: Rest.getHeaders(RestHeader.FORMDATA),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }
  public updateUser(data: any): Promise<AxiosResponse<any>> {
    return this.axios
      .post(Constant.SERVER_URL + 'api/developers/update', data, {
        headers: Rest.getHeaders(RestHeader.FORMDATA),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }
  public listUser(): Promise<AxiosResponse<any>> {
    return this.axios
      .get(Constant.SERVER_URL + 'api/developers/getalluser', {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }

  public deleteUser(id): Promise<AxiosResponse<any>> {
    return this.axios
      .get(Constant.SERVER_URL + 'api/developers/delete/' + id, {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }

  public deleteMultipleUser(data): Promise<AxiosResponse<any>> {
    return this.axios
      .post(Constant.SERVER_URL + 'api/developers/deletemultipleuser', data, {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }

  public changePassword(data: any): Promise<AxiosResponse<any>> {
    return this.axios
      .post(Constant.SERVER_URL + 'api/developers/forgotpassword', data, {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }

  public getUserById(id): Promise<AxiosResponse<any>> {
    return this.axios
      .get(Constant.SERVER_URL + 'api/developers/getuserbyid/' + id, {
        headers: Rest.getHeaders(RestHeader.APPLICATION_JSON),
      })
      .then((ag) => {
        return ag
      })
      .catch((error) => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired')
        } else if (error == 'Error: Request failed with status code 500') {
          return error
        } else if (error == 'Error: Request failed with status code 400') {
          alert('Bad Request!')
          return error
        } else if (error == 'Error: Request failed with status code 404') {
          alert('Page Not Found')
        }
        return error
      })
  }
}
export default new UserService()
