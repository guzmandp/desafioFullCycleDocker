const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

console.log(connection);

/*
const sql = `INSERT INTO people(name) values('Darwin Betancourt')`
connection.query(sql);
connection.end();
*/

app.get('/', (req, res) => {

  const names = 'Darwin Jesus Guzman Betancourt'

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