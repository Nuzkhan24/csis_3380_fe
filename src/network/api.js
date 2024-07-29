import axios from './axios';

export const getItems = async () => {
    const response = await axios.get('/items');
    return response.data;
}

