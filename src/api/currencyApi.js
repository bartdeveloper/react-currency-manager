import * as api from './api'

const NBPApiUri = 'https://api.nbp.pl/api/exchangerates';

export const getAll = () => api.get(`${NBPApiUri}/tables/a?format=json`)

export const getFewLastRatesByCode = (code) => api.get(`${NBPApiUri}/rates/a/${code}/last/20?format=json`)

export const getRateForCodeByDate = (code, date) => api.get(`${NBPApiUri}/rates/a/${code}/${date}?format=json`)