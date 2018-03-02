import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../models/answer';

@Injectable()
export class AnswerService {

  constructor( private _http: Http ) { }

  createAnswer(answer: Answer, question_id) {

    return this._http.post('/question/' + question_id + '/answer/new/', answer);
  }

  findAll() {

    return this._http.get('/answer/all');
  }

  findById(answer_id: String) {

    return this._http.get('/findAnswer/' + answer_id);
  }

  findAllByQuestionId(id: String) {

    return this._http.get('/question/' + id + '/answer/all');
  }

  likeAnswer(answer: Answer) {

    return this._http.post('/answer/' + answer._id, answer);
  }
}
