import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "2f86f1a027a841789e6651aa84122d73" //api_key
    }
})