import axios from 'axios';
export const api = axios.create({
//localhost fake api
//baseURL: 'http://localhost:3333'

//hosted fake api
baseURL: 'https://my-json-server.typicode.com/MiguelNevesCamargoJunior/podcastrnext/'

})