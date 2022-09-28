const Booking = require("../models/booking.model.js");

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create an Booking
  const booking = new Booking({
    date: req.body.date,
    location: req.body.location,
    userId:req.body.userId
    
  });

  // Save Booking in the database
  Booking.create(booking, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    else res.send(data);
  });
};
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Booking.updateByEmail(
    req.params.email,
    new Booking(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Booking with email ${req.params.email}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Booking with email " + req.params.email
          });
        }
      } else {
        res.send(data);
      }
    }
  );
};


exports.findAll = (req, res) => {
  const name = req.query.name;
  Booking.findAll(name, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding bookings"
      });
      return
    }
    res.send(data);
  }
  );
};


exports.findById = (req, res) => {
  Booking.findById(req.params.iduser, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Booking with iduser ${req.params.iduser}.`
        });
        return
      }
      res.status(500).send({
        message: "Error updating Booking with iduser " + req.params.iduser
      });
      return
    }
    res.send(data);
  }
  );
};



exports.deleteOne = (req, res) => {
  Booking.deleteOne(req.params.email, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error delete Booking with email " + req.params.email
      });

      return
    }
    res.send(data)
  });
};


exports.deleteAll = (req, res) => {
    Booking.deleteAll(req.query.name, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error"
      });

      return
    }
    res.send(data)
  })
}






