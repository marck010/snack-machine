

module.exports = class Config {

    static get database() { return process.env.SERVER_DB || "127.0.0.1:27017/snackMachine"; };
    static get user() { return process.env.USER_DB || "user_database"; };
    static get password() { return process.env.PASS_DB || "g6WzsDeDsb2trs56*"; };
    static get defaultBalance() { return process.env.DEFAULT_BALANCE || 10; };

}