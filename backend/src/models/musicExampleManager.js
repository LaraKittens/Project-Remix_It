const AbstractManager = require("./AbstractManager");

class musicExampleManager extends AbstractManager {
  constructor() {
    super({ table: "musicExample" });
  }

  insert(musicExample) {
    return this.connection.query(`insert into ${this.table} set ?`, [
      musicExample,
    ]);
  }

  update(musicExample) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      musicExample,
      musicExample.id,
    ]);
  }
}

module.exports = musicExampleManager;
