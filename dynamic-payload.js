import http from "k6/http";
import {check} from "k6"
import {
  randomIntBetween,
  randomString,
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
    vus: 5,
    duration: "5s",
};

const payload = {
  "title": randomString(12),
  "price": randomIntBetween(100,300),
  "description": randomString(12),
  "category": randomString(12),
  "image": "http://" + randomString(12)+ ".com"

}


const url = "https://fakestoreapi.com/products"


export default function () {
   const response = http.post(url, payload); 
   console.log("Here is payload :", payload)
   console.log("Here is response :", response.body)
   check(response, {
    "Status code validation" : (response)=> response.status===201,
    "Id validation": (response)=> response.body.includes("id")
   })
} 
