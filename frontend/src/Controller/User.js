// funcao para comparar usuario login e senha com o q tem no DB
const axios = require("axios");

export async function getUser(email, password) {
    let loginUser = false
    const response = await fetch("http://localhost:8080/api/users?email=" + email)
    const data = await response.json();
    console.log(data)

    if (data.message) {
        loginUser = false
    } else {


        let pwd = data.password
        console.log(pwd)
        console.log(password)
        if (pwd === password) {
            console.log("correct")
            loginUser = data


        } else {
            console.log("Wrong Password")
            return false
        }
    }

    return loginUser

}


export async function createUser(firstName, lastName, email, password) {
    const response = await axios.post('http://localhost:8080/api/users/', {
        "name": firstName,
        "lastname": lastName,
        "email": email,
        "password": password
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


export async function bookUser(iduser, date, location) {
    const response = await axios.post('http://localhost:8080/api/booking/', {
        "userId": iduser,
        "date": date,
        "location": location
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


