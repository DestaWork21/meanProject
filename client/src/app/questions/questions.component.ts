import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question/question.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  private questions: any[];
  private user: any;

  constructor(
    private qs: QuestionService,
    private us: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getQuestions();

    this.us.session((data) => {
      if (data.errors) {
        this.router.navigate(['/']);
      } else {
        this.user = data;
      }
    });
  }

  getQuestions() {
    this.qs.findAll().subscribe(
      questions => this.questions = questions.json(),
      error => console.log(error)
    );
  }

}
