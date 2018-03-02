import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/question';


@Injectable()
export class QuestionService {

    constructor(
        private _http: Http
    ) { }

    create(question: Question) {
        return this._http.post('/newQuestion', question);
    }

    findAll() {
        return this._http.get('/displayQuestions');
    }

    findById(id: String) {
        return this._http.get('/showQuestion/' + id);
    }
}
