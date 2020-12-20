import axios from 'axios';
const serverEndpoint = '';
// https://globewick.herokuapp.com/
// http://localhost:3008

const registerUser = (data) => {
    console.log('about to send axios req')
    return axios.post(serverEndpoint + '/user/register',data)
}
const loginUser = (data) => {
    console.log('about to send axios req data:',data)
    return axios.post(serverEndpoint + '/user/login',data )
}
const logoutUser = (data) => {
    return axios.get(serverEndpoint + '/user/logout', {withCredentials: true})
}
const pingBackend = () => {
    return axios.get(serverEndpoint + '/testapi')
}

export default {
    registerUser,loginUser,logoutUser,pingBackend
}