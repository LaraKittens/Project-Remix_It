const AbstractManager = require("./AbstractManager");

class musicHistoryManager extends AbstractManager {
  constructor() {
    super({ table: "musicHistory" });
  }

  insert(musicHistory) {
    return this.connection.query(`insert into ${this.table} set ?`, [
      musicHistory,
    ]);
  }

  update(musicHistory) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      musicHistory,
      musicHistory.id,
    ]);
  }

  findThree(userId) {
    return this.connection.query(
      `select * from ${this.table} WHERE userId = ? ORDER BY date DESC LIMIT 3`,
      [userId]
    );
  }
}

module.exports = musicHistoryManager;
