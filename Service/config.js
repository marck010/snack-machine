

module.exports = class Config {

    static get database() { return process.env.SERVER_DB; };
    static get user() { return process.env.USER_DB; };
    static get password() { return process.env.PASS_DB; };
    static get defaultBalance() { return process.env.DEFAULT_BALANCE; };

}