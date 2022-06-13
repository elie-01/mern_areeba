// var axios = require("axios");

// var headers = {
//     Accept: "application/json",
//     'apikey': "uabPKqiaI936lQO6PARUjDkonuPSMwIk"
// };

// const isValidPhoneNumber = async (phone_number) => {
//     try {
//         const { data } = await axios.get(`https://api.apilayer.com/number_verification/validate?number=${phone_number}`, {headers}); 
//         console.log("Valid:", data.valid);
//         return data.valid;
//     } catch (error) {
//         console.log("error");
//         return false;
//     }
// }

// module.exports = isValidPhoneNumber;

// isValidPhoneNumber(96171852535);