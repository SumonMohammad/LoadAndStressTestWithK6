//import { browser } from "k6/browser"
import http from "k6/http"


export const options = {
    vus : 2,
    iterations: 3,
    thresholds:{
        http_req_failed : ["rate < 0.01"],
        http_req_duration : ["p(90)<200", "p(95)< 190", "p(99)<300"],
    }
}

const url = "https://k6.io"


export default async function (){
    http.get(url)
}