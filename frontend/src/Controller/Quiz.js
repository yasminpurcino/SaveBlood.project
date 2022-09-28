const axios = require("axios");

export async function createQuiz(iduser, age, weight, height, antibiotics, cold, tattoo, pregnant) {

    const response = await axios.post('http://localhost:8080/api/quiz/', {
        "iduser": iduser,
        "age": age,
        "weight": weight,
        "height": height,
        "antibiotics": antibiotics,
        "cold": cold,
        "tattoo": tattoo,
        "pregnant": pregnant

    }).then(function (response) {
        console.log(response.status);
        // if response.status
        return ""
    }).catch(function (error) {
        console.log(error.message);
        return error.message
    });
    return response
}
