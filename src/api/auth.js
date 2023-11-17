import axios from 'axios'


const url = "https://www.googleapis.com/oauth2/v1/userinfo";


export const getUserInfo = async (token) => {
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    return res.data;
}