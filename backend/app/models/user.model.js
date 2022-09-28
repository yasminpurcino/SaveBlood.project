// model define as funcoes e a logica Esta fica apenas esperando a chamada das funções,[7] que permite o acesso para os dados serem coletados, gravados e, exibidos. model que diz COMO FAZER as coisa (ex CRUD)

const sql = require("./db.js");

// constructor
const User = function (user) {
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;

};

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", {
            id: res.insertId,
            ...newUser
        });
        result(null, {
            id: res.insertId,
            ...newUser
        });
    });
};

User.findEmail = (email, result) => {
    sql.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.findByPassword = (password, result) => {
    sql.query(`SELECT * FROM users WHERE email = ${password}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.updateByEmail = (email, user, result) => {
    sql.query("UPDATE users SET name = ?, lastname = ?, email = ?, password = ?  WHERE email = ?", [
        user.title,
        user.lastname,
        user.email,
        user.password,
        email
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) { // not found User with the id
            result({
                kind: "not_found"
            }, null);
            return;
        }

        console.log("updated user: ", {
            id: id,
            ...user
        });
        result(null, {
            id: id,
            ...user
        });
    });
};


User.findAll = (name, result) => {
    let query = "SELECT * FROM users";

    if (name) {
        query += ` WHERE title LIKE '%${name}'`;

    }

    console.log(query);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);

            return;
        }
        if (res.length) {
            console.log("found user:", res);
            result(null, res);
            return;
        }
        result({
            kind: "not_found"
        }, null)
    });
};

User.deleteOne = (email, result) => {
    sql.query(`DELETE FROM users WHERE email = ${email}`, (err, res) => {
        console.log(res)
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        if (res) {
            console.log("delete:", res);
            result(null, res);
            return;
        }
        result({
            kind: "not_delete"
        }, null)
    });
};

User.deleteAll = (name, result) => {
    let query = "DELETE FROM users";

    if (name) {
        query += ` WHERE name = '${name}'`;

    }

    console.log(query);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null)
            return;
        }
        if (res) {
            result(null, res)
            return;
        }
    });
};

module.exports = User
