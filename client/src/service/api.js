import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try{
        return await axios.post(`${URL}/signup`,user);
    }catch(error){
        console.log('Error while calling signup API', error);
        return error.response;
    }
};

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
};

export const getProductById = async (id) => {
    try {
        return await axios.get(`${URL}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
};

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the payment api', error);
    }
};