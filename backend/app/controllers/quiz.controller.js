const Quiz = require("../models/quiz.model.js");

// Create and Save a new Quiz
exports.create = (req, res) => { // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
    }

    // Create an Quiz
  
    const quiz = new Quiz({
        iduser: req.body.iduser,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        antibiotics: req.body.antibiotics,
        cold: req.body.cold,
        tattoo: req.body.tattoo,
        pregnant: req.body.pregnant,
        resultQuiz:req.body.result

    });

    // Save Quiz in the database
    Quiz.create(quiz, (err, data) => {
        if (err) 
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Quiz."
            });
         else 
            res.send(data);
        
    });
};
exports.updateByEmail = (req, res) => { // Validate Request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
    }


    Quiz.updateByEmail(req.params.email, new Quiz(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Not found Quiz with email ${
                        req.params.email
                    }.`});
            } else {
                res.status(500).send({
                    message: "Error updating Quiz with email " + req.params.email
                });
            }
        } else {
            res.send(data);

        }
    });
};


exports.findAll = (req, res) => {
    const name = req.query.name;
    Quiz.findAll(name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while finding quiz"
            });
            return
        }
        res.send(data);
    });
};


exports.findByEmail = (req, res) => {
    redisClient.getCache()
    Quiz.findByEmail(req.params.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Not found Quiz with email ${
                        req.params.email
                    }.`});
                return
            }
            res.status(500).send({
                message: "Error updating Quiz with email " + req.params.email
            });
            return
        }
        res.send(data);
    });
};


exports.deleteOne = (req, res) => {
    Quiz.deleteOne(req.params.email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error delete Quiz with email " + req.params.email
            });

            return
        }
        res.send(data)
    });
};


exports.deleteAll = (req, res) => {
    Quiz.deleteAll(req.query.name, (err, data) => {
        if (err) {
            res.status(500).send({message: "Error"});

            return
        }
        res.send(data)
    })
}
