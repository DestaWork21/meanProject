// require each model
const QuestionController = require('../controllers/QuestionController');
const AnswerController = require('../controllers/AnswerController');
const UserController = require('../controllers/UserController');

const path = require('path');

module.exports = function (app) {

    //Question
    app.post('/newQuestion', QuestionController.createQuestion);
    app.get('/displayQuestions', QuestionController.findAll);
    app.get('/showQuestion/:question_id', QuestionController.findById);

    //Answer
    app.post('/question/:question_id/answer/new/', AnswerController.createAnswer);
    app.post('/answer/:id', AnswerController.likeAnswer);
    app.get('/answer/all', AnswerController.findAll);
    app.get('/question/:id/answer/all', AnswerController.findAllByQuestionId);
    app.get('/findAnswer/:id', AnswerController.findById);

    //User
    app.post("/user/new", UserController.createUser);
    app.get("/user/all", UserController.findAll);
    app.get("/user/:id", UserController.findById);
    app.post("/register", UserController.register);
    app.post("/login", UserController.login);
    app.get("/logout", UserController.logout);
    app.get("/session", UserController.session);

   //Angular
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve('./client/dist/index.html'));
    })
}