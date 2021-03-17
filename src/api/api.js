import * as axios from 'axios'

let instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '209ecb71-3184-4a07-859e-3929b7186cdb'
  }
})

export const usersAPI =  {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => {
           return response.data
       })
 },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
            .then(response => {
              return response.data
            })
    },
  follow(id) {
    return instance.post(`follow/${id}`)
            .then(response => {
              return response.data
            })
  } ,
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
            .then(response => {
              return response.data
            })
    }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status}).then(response => response.data)
  },
  savePhoto(photoFile) {
    let formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => response.data)
  }
}


export const authAPI = {
  me() {
    return  instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return  instance.post(`auth/login`, {email, password, rememberMe})
      .then(response => response.data)
  },
  logout() {
    return  instance.delete(`auth/login`)
      .then(response => response.data)
  }
}