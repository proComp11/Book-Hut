import axios from "axios";

const backboneapi = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/login`;
    return axios.post(url,model).then(res => {
        return res.data; 
    })
}

export default backboneapi;