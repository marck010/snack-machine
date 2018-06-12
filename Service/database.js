const mongoose = require("mongoose");
const config = require("./config");

module.exports = class DatabaseConnect {

    static connect() {
        var server = config.database;
        var user = config.user;
        var password = config.password;
    
        let url = 'mongodb://' + user + ":" + password + '@' + server;
        
        mongoose.connect(url, function (error) {
            
            if (error) {
                next(error)
                console.log(error);
                return;
            }

            console.log('Conected in ' + url);
    
        });
    }
}