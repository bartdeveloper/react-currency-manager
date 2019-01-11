import * as api from './api'
import { NBPApiUrl } from './NBPApi'

  export const getAll = () => api.get(NBPApiUrl())

  export const get = (code) => api.get(NBPApiUrl(code))