import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { QuestionService } from '../question/question.service';
import { AnswerService } from '../answer/answer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  question: Question;
  question_id: String;
  currentAnswer: Answer;
  answer_id: String;
  answer: Answer;

  constructor(private _questionService: QuestionService, private _route: ActivatedRoute, private _answerService: AnswerService) { }

  ngOnInit() {
    this.question_id = this._route.snapshot.params.question_id;
    this.showPage();
  }

  showPage() {

    this._questionService.findById(this.question_id).subscribe(
      question => this.question = question.json(),
      error => console.log(error)
    );
  }

  // get the particular answer and pass that along to the back end
  likeAnswer(answer: Answer) {

    this._answerService.likeAnswer(answer).subscribe(
      answer => this.answer = answer.json(),
      error => console.log(error)
    );
    location.reload();
  }

}




