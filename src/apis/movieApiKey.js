import axios from "axios";

export  const movieAxios= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})