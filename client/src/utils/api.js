import axios from 'axios'
import { APi_IP, APi_PORT } from '../conf'

const instance = axios.create({
	baseURL: `http://${APi_IP}:${APi_PORT}/api/`,
})

instance.interceptors.request.use(config => {
	return config
})

export default instance
