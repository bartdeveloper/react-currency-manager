const NBPApi = 'http://api.nbp.pl/api/exchangerates';

export const NBPApiUrl = code => code ? `${NBPApi}/rates/a/${code}/last/10?format=json` : `${NBPApi}/tables/a?format=json`