const models = require("../models");
const { hashPassword, verifyPassword, createJwt } = require("./auth");
require("dotenv").config();

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  user.password = await hashPassword(user.password);

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    // peut etre add un .send
    return res.sendStatus(400);
  }

  return models.user.findByEmail(mail).then(async ([rows]) => {
    if (!rows.length) {
      return res.sendStatus(403);
    }

    const verifiedPassword = await verifyPassword(password, rows[0].password);
    if (!verifiedPassword) {
      return res.sendStatus(403);
    }

    const currentUser = rows[0];
    delete currentUser.password;

    const token = createJwt(currentUser);
    res.cookie("userToken", token, {
      maxAge: parseInt(process.env.JWT_EXPIRES, 10) * 1000,
      httpOnly: true,
    });

    return res.status(200).send(currentUser);
  });
};

const tutosAndExercicesWithId = (req, res) => {
  models.user
    .findTutoAndExercice(req.user.id)
    .then(([rows]) => {
      if (!rows.length) {
        res.status(404).send("User not found");
      } else {
        const tutos = [];
        for (let i = 0; i < rows.length; i += 1) {
          if (i === 0 || tutos[tutos.length - 1].tutoId !== rows[i].tutoId) {
            const tuto = {
              tutoId: rows[i].tutoId,
              tutoName: rows[i].tutoName,
              exercices: [
                { id: rows[i].exerciceId, isCheck: rows[i].exerciceCheck },
              ],
            };
            tutos.push(tuto);
          } else {
            tutos[tutos.length - 1].exercices.push({
              id: rows[i].exerciceId,
              isCheck: rows[i].exerciceCheck,
            });
          }
        }
        tutos.forEach((element, i) => {
          tutos[i].exercicesCheck = element.exercices.reduce(
            (accumulator, currentValue) => accumulator + currentValue.isCheck,
            0
          );
        });
        res.send(tutos);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  tutosAndExercicesWithId,
};
