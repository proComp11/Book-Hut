import axios from "axios";


const insertBookApi = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/book`;
    return axios.post(url,model).then(res =>{
        return res.data;
    })
}

export default insertBookApi;