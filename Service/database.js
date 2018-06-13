const mongoose = require("mongoose");
mongoose.Promise = Promise;
const config = require("./config");

module.exports = class DatabaseConnect {

    static connect() {

        var server = config.database;
        var user = config.user;
        var password = config.password;

        let url = 'mongodb://' + user + ":" + password + '@' + config.database;

        mongoose.connect(url, (error) => {

            if (error) {
                throw new Error(error);
                return;
            }

            console.log('Conected in ' + url);

        });
    }
}