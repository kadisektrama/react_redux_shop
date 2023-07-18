import axios from 'axios'
import cookie from 'cookie'

const { token } = cookie.parse(document.cookie)

export const instance = axios.create({
    //withCredentials: true,
    baseURL: `${process.env.REACT_APP_REST_API}/host`,
    headers: { 'Authorization': `Bearer ${token}` }
})