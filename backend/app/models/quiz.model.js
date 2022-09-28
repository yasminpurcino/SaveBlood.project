
const sql = require("./db.js");

// constructor
const Quiz = function (quiz) {
  this.iduser = quiz.iduser;
  this.age = quiz.age;
  this.weight = quiz.weight;
  this.height = quiz.height;
  this.antibiotics = quiz.antibiotics;
  this.cold = quiz.cold;
  this.tattoo = quiz.tattoo;
  this.pregnant = quiz.pregnant;
 
};

Quiz.create = (newQuiz, result) => {
  sql.query("INSERT INTO quiz SET ?", newQuiz, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created quiz: ", { id: res.insertId, ...newQuiz });
    result(null, { id: res.insertId, ...newQuiz });
  });
};

Quiz.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM quiz WHERE email = ${email}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found quiz: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Quiz with the email
    result({ kind: "not_found" }, null);
  });
};

Quiz.updateByEmail = (email, quiz, result) => {
  sql.query(
    "UPDATE quiz SET name = ?, lastname = ?, email = ?, password = ?  WHERE email = ?",
    [quiz.title, quiz.lastname, quiz.email, quiz.password, email],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Quiz with the email
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated quiz: ", { email: email, ...quiz });
      result(null, { email: email, ...quiz });
    }
  );
};

Quiz.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM quiz WHERE email = ${email}`, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found quiz:", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null)
  });
};

Quiz.findAll = (name, result) => {
  let query = "SELECT * FROM quiz";

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
      console.log("found quiz:", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null)
  });
};

Quiz.deleteOne = (email, result) => {
  sql.query(`DELETE FROM quiz WHERE email = ${email}`, (err, res) => {
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
    result({ kind: "not_delete" }, null)
  });
};

Quiz.deleteAll = (name, result) => {
  let query = "DELETE FROM quiz";

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

module.exports = Quiz


