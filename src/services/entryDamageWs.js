import {_axios} from './api';

export const createDamage = data => {
    return _axios.post('/entry-damage/', data);
}