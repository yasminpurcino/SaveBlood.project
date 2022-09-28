const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => { // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    // Create an User
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        // published: req.body.published || false
    });

    // Save User in the database
    User.create(user, (err, data) => {
        if (err) 
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
         else 
            res.send(data);
        
    });
};
exports.update = (req, res) => { // Validate Request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    console.log(req.body);

    User.updateByEmail(req.params.email, new User(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Not found User with id ${
                        req.params.email
                    }.`});
            } else {
                res.status(500).send({
                    message: "Error updating User with id " + req.params.email
                });
            }
        } else {
            res.send(data);
            redisClient.clearCache()
        }
    });
};


exports.findByEmail = (req, res) => {
    const email = req.query.email;
    User.findEmail(email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Not found User with email ${
                        req.query.email
                    }.`});
                return
            }
            res.status(500).send({
                message: "Error found User with email " + req.query.email
            });
            return
        }
        res.send(data);
    });
};


exports.deleteOne = (req, res) => {
    User.deleteOne(req.params.email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error delete User with email " + req.params.email
            });

            return
        }
        res.send(data)
    });
};


exports.deleteAll = (req, res) => {
    User.deleteAll(req.query.name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error " + err
            });

            return
        }
        res.send(data)
    })
}
