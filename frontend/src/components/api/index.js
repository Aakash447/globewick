import axios from 'axios';
const serverEndpoint = 'https://globewick.herokuapp.com:3008';
// https://globewick.herokuapp.com/

const registerUser = (data) => {
    console.log('about to send axios req')
    return axios.post(serverEndpoint + '/user/register',data ,{withCredentials:true} )
}
const loginUser = (data) => {
    return axios.post(serverEndpoint + '/user/login',data , {withCredentials: true})
}
const logoutUser = (data) => {
    return axios.get(serverEndpoint + '/user/logout', {withCredentials: true})
}

export default {
    registerUser,loginUser,logoutUser
}