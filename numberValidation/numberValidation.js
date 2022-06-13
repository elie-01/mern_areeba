// import fetch from 'node-fetch';

// var myHeaders = {
//   "apikey": "XZeXEnzTUdUTEutHMQ6tI27kOzyZW1Pq"
// };

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// // };

// fetch("https://api.apilayer.com/number_verification/validate?number=96171852535", requestOptions)
//   .then(response => response.json())
//   .then(data => console.log(JSON.stringify(
//     "Valid: " + data.valid + ' || ' +
//     "Phone number: " + data.number + ' || ' +
//     "Country code: " + data.country_code + ' || ' +
//     "Country name: " + data.country_name + ' || ' +
//     "Operator name: " + data.carrier )))
//   .catch(error => console.log('error', error));


var axios = require("axios");

var headers = {
    Accept: "application/json",
    'apikey': "uabPKqiaI936lQO6PARUjDkonuPSMwIk"
};

const fetchNumber = async () => {
    try {
        const { data } = await axios.get("https://api.apilayer.com/number_verification/validate?number=96171852535", {headers}); 
        console.log(data.valid);
    } catch (error) {
        console.log(error.response);
    }
}

fetchNumber();
