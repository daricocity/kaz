import axios from 'axios';
import swal from 'sweetalert';
import { baseUrl } from '../utils/setupUtils';
import { 
    GET_ALL_PRODUCTS, 
    GET_SINGLE_PRODUCT, 
    GET_PRODUCTS, GET_PRODUCT, 
    DELETE_PRODUCT, 
    GET_ERRORS
} from '../constants/types';

// Delete User's individual Product Object (Authentication Required)
export const deleteProduct = (id, history) => async dispatch => {
    swal({
        title: "Are you sure?",
        text: "This will delete the product and all the data related to it!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
        axios.delete(`${baseUrl}/api/product/${id}/delete/`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        });
        swal("Product has been deleted!", {
            icon: "success",
            timer: 5000,
            button: false
        }, history.push('/user/product')); 
        } else {
        swal("Product file is safe!", {
            timer: 5000,
            button: false
        });
        }
    });
};

// Update User's individual Product Object (Authentication Required)
export const updateProduct = (updateObject, id, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.put(`${baseUrl}/api/product/${id}/edit/`, updateObject, config);
        swal({
            title: "Success!",
            text: "Product Updated!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to product
        history.push('/user/product');
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get User's individual Product Object (Authentication Required)
export const getProduct = (id, history) => async dispatch => {
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        const res = await axios.get(`${baseUrl}/api/product/${id}/`,config);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        history.push("/user/product");
    }
};

// Get all User's Products Object (Authentication Required)
export const getProducts = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/product/list/`,config);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};

// Create Product Object (Authentication Required)
export const addProduct = (proObject, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        let formData = new FormData()
        formData.append('title', proObject.title)
        formData.append('description', proObject.description)
        formData.append('regular_price', proObject.regular_price)
        formData.append('category', proObject.category)
        formData.append('stock_status', proObject.stock_status)
        formData.append('quantity_stocked', proObject.quantity_stocked)
        formData.append('delivery_location', proObject.delivery_location)
        for( let i = 0; i <= proObject.images.length; i++){
            formData.append(`image[${i}]`, proObject.images[i]);
        }
        await axios.post(`${baseUrl}/api/product/create/`, formData, config);
        swal({
            title: "Success!",
            text: "Product Created!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to product
        history.push('/user/add_product');
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get Single Product Object
export const getSingleProduct = (id) => async dispatch => {
    const res = await axios.get(`${baseUrl}/api/product/all/${id}/`);
    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: res.data
    });
};

// Get all Available Product Object
export const getAllProducts = () => async dispatch => {
    const res = await axios.get(`${baseUrl}/api/product/all/`);
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data
    });
};


// if(window.confirm("Are you sure? This will delete the product and all the data related to it")){
//     await axios.delete(`${baseUrl}/api/product/${id}/delete/`);
//     dispatch({
//         type: DELETE_PRODUCT,
//         payload: id
//     });
// }
// redirect to product
// history.push('/user/product');