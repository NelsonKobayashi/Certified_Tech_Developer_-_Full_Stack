import axios from 'axios';

const apiVC = axios.create({
  baseURL: 'https://viacep.com.br/ws'
});

const apiBA = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1/'
})

export { apiVC, apiBA };
