import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question/question.service';
import { Question } from '../models/question';
import { Router } from '@angular/router';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

    private qs: QuestionService;
    private question: Question;
    private questions: any;
    private errors = [];

    constructor(
        qs: QuestionService,
        private router: Router
    ) {
        this.qs = qs;
        this.question = new Question();
    }

    ngOnInit() {
    }

    createQuestion() {


        this.qs.create(this.question).subscribe(
            question => question.json(),
            err => this.errors.push(err)
        );

        if (this.errors.length === 0) {
            this.router.navigate(['/questions']);
        } else {
            this.router.navigate(['/addNewQuestion']);
        }
    }
}
