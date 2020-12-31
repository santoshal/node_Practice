const connection = require("../config/db.config");

//Get query
//http://localhost:8080/api
exports.getDetails = (req, res) => {

    let sql = "select * from users";
    connection.query(sql, (err, rows, fields) => {
        if (err) { throw err; }
        else { res.send(rows); }

    })
}

exports.getUserDetails=(req, res)=>{
    let userid=req.params.id;  
     values=[userid]
    let sql = "select * from users where id=?";
    connection.query(sql,values,(err, row, fields) => {
        if (err) { throw err; }
        else { res.send(row); }

    })

}

//Post Query
//http://localhost:8080/api/post
exports.postDetails = (req, res) => {
    let uname = req.body.name;
    let umail = req.body.email;
    let upass = req.body.password;
    let rid = 2;

    let sql = "insert into users (username,email,password,roleid) values (?,?,?,?)";
    var values = [uname, umail, upass, rid];

    connection.query(sql, values, (err, rows) => {
        if (err) { throw err; }
        else { res.json(rows); }
    })

}

//Update Query
//http://localhost:8080/api/put
exports.updateDetails = (req, res) => {
    let uname = req.body.name;
    let id = req.params.id;

    let sql = "update users set username=? where id=?";
    var values = [uname, id];

    connection.query(sql, values, (err, rows) => {
        if (err) { throw err; }
        else { res.send(rows); }
    })

}

//Delete Query
//http://localhost:8080/api/delete/:id
exports.deleteDetails = (req, res) => {
    let id = req.params.id;
    
    let sql = "delete from users where id=?";
    var values = [id];

    connection.query(sql, values, (err, rows) => {
        if (err) { throw err; }
        else { res.send(rows); }
    })

}


