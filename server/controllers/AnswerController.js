const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const Question = mongoose.model('Question');

class AnswerController {

    // A post route for creating a new answer
    createAnswer(req, res) {
        console.log("AnswerController.js >> Attempting to create answer.");
        // store the user id to know who created this answer
        req.body._user = req.session.user_id;
        Question.findOne({ _id: req.params.question_id }, (err, question) => {

            // create a new answer with the body's info
            let answer = new Answer(req.body);
            answer._question = question._id;
            question._answers.push(answer);
            question.save((err) => {
                answer.save((err) => {
                    if (err) {
                        console.log("Error: " + err);
                        res.json(err);
                    } else {
                        console.log("Success! Answer created.");
                        res.json(answer);
                    }
                })
            })
        })
    }

    // A get route for finding all answers
    findAll(req, res) {
        console.log("AnswerController.js >> Attempting to find all answers.");
        Answer.find({}).exec((err, answers) => {
            if (err) {
                console.log("Error: " + err);
                res.json(err);
            } else {
                console.log("Success! Answers found.");
                res.json(answers);
            }
        })
    }

    // A get route for finding one particular answer
    findById(req, res) {
        console.log("UserController.js >> Attempting to find answer by ID.");
        Answer.findOne({ _id: req.params.id }, (err, answer) => {
            if (err) {
                console.log("Error: " + err);
                res.json(err);
            } else {
                console.log("Success! Answer found.");
                res.json(answer);
            }
        });
    }

    // a get route to 'like' a particular answer
    likeAnswer(req, res) {
        console.log("AnswerController.js >> Attempting to like an answer.");

        // get answer_id from url, passed from service to find the answer object in the DB
        Answer.findOne({ _id: req.params.id }, (error, answer) => {
            if (error) {
                console.log("Error: " + error);
            } else {
                console.log("Success! Answer found.");
                answer.likes++;
                answer.save(answer, (error, updatedAnswer) => {
                    if (error) {
                        console.log("Error: " + error);
                        return res.json(error);
                    } else {
                        console.log("Success! Answer updated.");
                        return res.json(updatedAnswer);
                    }
                })
            }
        })
    }

    findAllByQuestionId(req, res) {
        console.log("AnswerController.js >> Attempting to find all answers by question id");
        Question.findOne({ _id: req.params.id })
            .populate({
                path: "_answers",
                model: "Answer"
            })
            .exec((err, specificAnswers) => {
                if (err) {
                    console.log("Error: " + err);
                    res.json(err);
                } else {
                    console.log("Success! Specific answers found.");
                    res.json(specificAnswers);
                }
            })
    }
}

module.exports = new AnswerController();