const express = require('express')
const app = express()
const port = process.env.APP_PORT || 5000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

console.log(connection);

//const sql = `INSERT INTO people(name) values('Darwin Betancourt')`
//const sql = `INSERT INTO people(name) values('John Connor'), ('Mary Jane'), ('Darwin Betancourt')`
//connection.query(`INSERT INTO people (name) VALUES ('John'), ('Jane'), ('Darwin')`);
//connection.query(sql);
//connection.end();


app.get('/', (req, res) => {

  const name = 'Darwin Betancourt'

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)
  

  connection.query(`SELECT name FROM people`, (error, results) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ul>
    `)
  })
    //res.send('<h1>Full Cycle Rocks!</h1>');
    //console.log(`Hello World`);

})


app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
})