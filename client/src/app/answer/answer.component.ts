import { Component, OnInit } from '@angular/core';
import { Answer } from '../models/answer';
import { Router, ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  private as: AnswerService;
  private answers: any;
  private errors = [];
  answer = new Answer();
  question_id = String;

  constructor(
    as: AnswerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.as = as;
  }

  ngOnInit() {
    this.question_id = this.route.snapshot.params.question_id;
  }

  createAnswer() {

    this.as.createAnswer(this.answer, this.question_id).subscribe(
      updatedAnswer => updatedAnswer.json(),
      err => this.errors.push(err)
    );

    if (this.errors.length === 0) {

      this.router.navigate(['/questions']);
    } else {

      this.router.navigate(['/addNewAnswer']);
    }
  }
}
