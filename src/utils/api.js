import axios from "axios";
import KEY_API from "../utils/apiId";

const BASE_URL = 'https://api.unsplash.com/search/photos';
const PER_PAGE = 12;

export default async function getDataImages(searchValue, nextPage) {

    try {
        const responseArray = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: searchValue,
                per_page: PER_PAGE,
                page: nextPage
            },
            headers: {
                Authorization: `Client-ID ${KEY_API}`
            }
        });
        return responseArray.data;
    } catch (error) {
       console.error("Error fetching data:", error.response ? error.response.data : error.message);;
    }
}


