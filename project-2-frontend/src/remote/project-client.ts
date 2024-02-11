import axios from 'axios'
import { environment } from '../environment'

//set up our base environment for our webflicks connection
export const projectClient = axios.create({
    baseURL:environment.projectBaseUrl, //the base network address with no URI's on 
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})