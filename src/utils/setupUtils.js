import axios from "axios";

// Production Server
// export const baseUrl = 'https://kazubarmaketapi.pythonanywhere.com';

// Development Server
export const baseUrl = 'http://127.0.0.1:8000';

export const setJWTToken = token => {
    // if token exits, then set it to the header
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
  
  