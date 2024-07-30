import axios from './axios';

export const getItems = async () => {
    const response = await axios.get('/items');
    return response.data;
}

export const addUserAndUpdateItem = async (item, newBid, user) => {
    const response = await axios.put('/items/' + item._id, {
        currentBid: newBid,
        user
    });
    return response.data;
}

