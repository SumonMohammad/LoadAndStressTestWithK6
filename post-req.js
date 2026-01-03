import http from "k6/http";
import {check} from "k6"

export const options = {
    vus: 5,
    duration: "5s",
};

const payload = {
  "title": "New Phjjone",
  "price": 4000,
  "description": "Latest iPhone ",
  "category": "FlagShip",
  "image": "http://iphone.com"

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
