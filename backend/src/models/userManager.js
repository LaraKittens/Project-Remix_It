const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(`insert into ${this.table} set ?`, [user]);
  }

  update(user) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  findByEmail(mail) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE mail = ?`, [
      mail,
    ]);
  }

  findTutoAndExercice(userId) {
    return this.connection.query(
      `select t.id as tutoId, t.name as tutoName, e.id as exerciceId, eu.isCheck as exerciceCheck from tuto as t join exercices as e on t.id = e.tutoId join exerciceUser as eu on e.id = eu.exerciceId join user as u on u.id = eu.userId where u.id=? order by t.id, e.id`,
      [userId]
    );
  }
}

module.exports = UserManager;
