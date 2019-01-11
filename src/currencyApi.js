import * as api from './api'

const NBPApi = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';

export const getAll = () =>
  api.get(NBPApi)