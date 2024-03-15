import axios from "axios";

const BASE_URL = "https://5cb2-136-233-9-98.ngrok-free.app";


const createProduct = async (product) => {
    const response = await axios.post(`${BASE_URL}/product`, product, {
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
    });
    console.log(response.data);
    return response.data;
};

const getProduct = async (productId) => {
    const response = await axios.get(`${BASE_URL}/product/${productId}`, {
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        },
    });
    console.log(response.data);
    return response.data;
};

export { createProduct, getProduct };