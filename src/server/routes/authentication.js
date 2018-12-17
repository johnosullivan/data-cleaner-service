const { AuthenticationController } = require('./../controllers');

const auth = (app) =>  {

    app.post('/auth/sign-up', AuthenticationController.create)

};

module.exports = auth;