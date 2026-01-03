import http from "k6/http";
import {check} from "k6"

export const options = {
    vus: 5,
    iterations: 10,
};

const params = {
    headers : {
        "Authorization": "Bearer e048r09480980948"
    }
}

const headers= {
    "x-api-key" : "dev_2ec6f70b57202f106ada7b2965da75821c21f53832dcd6fa"
}
//pro_095843c7ceb1e6dbfd6e32317f1580306b7b4356147f4a72

const url = "https://reqres.in/api/collections/newcollection/records"


export default function () {
   const response = http.get(url, {headers:headers}); 
   check(response, {
    "Status code validation" : (response)=> response.status===200
   })
} 
