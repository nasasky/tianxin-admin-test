import axios from '@/utils/custom-axios'

/* 
 * token已在custom-axios.js中的请求拦截部分添加至报文头部，这里不再添加token。
 */

export const login = ({
  username,
  password
}) => {
  const data = {
    username,
    password
  }
  //这里返回一个Promise，request方法传入一个配置对象，配置项参考axios
  return axios.request({
    url: '/5a6614d399fd4',
    data,
    method: 'post'
  })
}

export const getUserInfo = ((id) => {
  return axios.request({
    url: '/5a6a2f4c31ce0',
    data: {
      id: id
    }, //测试需要，请求体带上token，便于mock时确定用户信息
    method: 'get'
  })
})

export const logout = (() => {
  return axios.request({
    url: '/api/user/logout',
    method: 'post'
  })
})