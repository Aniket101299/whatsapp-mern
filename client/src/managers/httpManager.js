import axios from "axios";
const API_BASE_URL = "http://localhost:5678";

const httpManager = {
    createUser,
    searchUser,
};

const createUser = (userData) => {
    await axios.post(`${API_BASE_URL}/user`, userData);
};

const searchUser = (email) => {
    await axios.get(`${API_BASE_URL}/search-user?email=${email}`);
};

export default httpManager;
