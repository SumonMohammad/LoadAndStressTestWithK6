import http from "k6/http";

export const options = {
    stages:[
        { duration: '30s', target: 50 }, // ramp up to 50 users
        { duration: '1m', target: 50 }, // stay at 50 users
        { duration: '10s', target: 0 },  // ramp down to 0 users
    ]
};

export default function () {
    http.get("https://test.k6.io"); 
}