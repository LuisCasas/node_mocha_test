var db = require('./db.js');

module.exports.signUp = (email, password) => {

    db.saveUser({email,password});

}