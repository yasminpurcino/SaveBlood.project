const sql = require("./db.js");

// constructor
const Booking = function (booking) {
    this.date = booking.date;
    this.location = booking.location;
    this.iduser = booking.userId;

};

Booking.create = (newBooking, result) => {
    sql.query("INSERT INTO bookings SET ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created booking: ", {
            id: res.insertId,
            ...newBooking
        });
        result(null, {
            id: res.insertId,
            ...newBooking
        });
    });
};

Booking.findById = (iduser, result) => {
    sql.query(`SELECT * FROM bookings WHERE iduser = ${iduser}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found booking: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Booking with the id
        result({
            kind: "not_found"
        }, null);
    });
};

Booking.updateById = (id, booking, result) => {
    sql.query("UPDATE bookings SET date = ?, location= ?, userId = ?  WHERE id = ?", [
        booking.date, booking.location, booking.userId, id
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) { // not found Bookingwith the id
            result({
                kind: "not_found"
            }, null);
            return;
        }

        console.log("updated booking: ", {
            id: id,
            ...booking
        });
        result(null, {
            id: id,
            ...booking
        });
    });
};


Booking.findAll = (email, result) => {
    let query = "SELECT * FROM bookings";

    if (email) {
        query += ` WHERE title LIKE '%${email}'`;

    }

    console.log(query);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);

            return;
        }
        if (res.length) {
            console.log("found booking:", res);
            result(null, res);
            return;
        }
        result({
            kind: "not_found"
        }, null)
    });
};

Booking.deleteOne = (id, result) => {
    sql.query(`DELETE FROM bookings WHERE id = ${id}`, (err, res) => {
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

Booking.deleteAll = (email, result) => {
    let query = "DELETE FROM bookings";

    if (email) {
        query += ` WHERE email = '${email}'`;

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

module.exports = Booking
