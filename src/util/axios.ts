import Axios from "axios";
import CurrentEnv, { Env } from "../constants/env";

export const baseURL = CurrentEnv === Env.Dev ? "localhost:8080/api/" : "./api/"

const axios = Axios.create( {
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    baseURL,

    // from plain Object to stardart format
    transformRequest:  [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }]
} );

export default axios;