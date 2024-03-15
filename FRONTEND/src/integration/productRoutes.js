import axios, { Axios } from "axios";

const BASE_URL = "https://76b1-136-233-9-98.ngrok-free.app";


const createProduct = async (product) => {
    const response = await axios.post(`${BASE_URL}/product`, { "user_id": 1, "name": product, "product_category": "Updated" }, {
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
        }
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