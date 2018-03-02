webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\n    color: red;\n}\n#logout{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/questions']\">Home</button>\n<button [routerLink]=\"['/showAnswers', question_id]\">Go Back to Question</button>\n<button [routerLink]=\"['']\" id=\"logout\">Logout</button>\n\n<h1>New Answer</h1>\n\n<form (submit)=\"createAnswer()\">\n  Your Answer:\n  <div class=\"error\" *ngIf=\"!content.valid\">Answers must have at least 5 characters.</div>\n  <p><textarea \n    required\n    minlength=\"5\"\n    name=\"answer.content\" \n    rows=\"2\" \n    cols=\"30\" \n    [(ngModel)]=\"answer.content\"\n    #content=\"ngModel\"\n    ></textarea>\n  </p>\n  Support Details (optional):\n  <p><textarea name=\"answer.details\" rows=\"2\" cols=\"30\" [(ngModel)]=\"answer.details\"></textarea></p>\n  <p><button [routerLink]=\"['/questions']\">Cancel</button><input type=\"submit\" value=\"Submit Answer\"></p>\n</form>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var answer_1 = __webpack_require__("../../../../../src/app/models/answer.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var answer_service_1 = __webpack_require__("../../../../../src/app/answer/answer.service.ts");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(as, router, route) {
        this.router = router;
        this.route = route;
        this.errors = [];
        this.answer = new answer_1.Answer();
        this.question_id = String;
        this.as = as;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        this.question_id = this.route.snapshot.params.question_id;
    };
    AnswerComponent.prototype.createAnswer = function () {
        var _this = this;
        this.as.createAnswer(this.answer, this.question_id).subscribe(function (updatedAnswer) { return updatedAnswer.json(); }, function (err) { return _this.errors.push(err); });
        if (this.errors.length === 0) {
            this.router.navigate(['/questions']);
        }
        else {
            this.router.navigate(['/addNewAnswer']);
        }
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [answer_service_1.AnswerService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;


/***/ }),

/***/ "../../../../../src/app/answer/answer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AnswerService = /** @class */ (function () {
    function AnswerService(_http) {
        this._http = _http;
    }
    AnswerService.prototype.createAnswer = function (answer, question_id) {
        return this._http.post('/question/' + question_id + '/answer/new/', answer);
    };
    AnswerService.prototype.findAll = function () {
        return this._http.get('/answer/all');
    };
    AnswerService.prototype.findById = function (answer_id) {
        return this._http.get('/findAnswer/' + answer_id);
    };
    AnswerService.prototype.findAllByQuestionId = function (id) {
        return this._http.get('/question/' + id + '/answer/all');
    };
    AnswerService.prototype.likeAnswer = function (answer) {
        return this._http.post('/answer/' + answer._id, answer);
    };
    AnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;


/***/ }),

/***/ "../../../../../src/app/answers/answers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n    border-collapse: collapse;\n}\n\ntable, td, th {\n    border: 1px solid black;\n    padding: 4px;\n}\n\n#logout{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answers/answers.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/questions']\">Home</button>\n<button [routerLink]=\"['/addNewAnswer', question_id]\">Answer this Question</button>\n<button [routerLink]=\"['']\" id=\"logout\">Logout</button>\n\n<h3>Question</h3>\n<table>\n  <tr>\n    <th>Content</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>{{ question?.content }}</td>\n    <td>{{ question?.description }}</td>\n  </tr>\n</table>\n\n<h3>Answers</h3>\n<table>\n  <tr>\n    <th>User name</th>\n    <th>Content</th>\n    <th>Details</th>\n    <th>Like Count</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let answer of question?._answers\">\n    <td>{{ answer._user.username }}</td>\n    <td>{{ answer.content }}</td>\n    <td>{{ answer.details }}</td>\n    <td>{{ answer.likes }}</td>\n    <td><button (click)=\"likeAnswer(answer)\">like</button></td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/answers/answers.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_service_1 = __webpack_require__("../../../../../src/app/question/question.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/answer/answer.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AnswersComponent = /** @class */ (function () {
    function AnswersComponent(_questionService, _route, _answerService) {
        this._questionService = _questionService;
        this._route = _route;
        this._answerService = _answerService;
    }
    AnswersComponent.prototype.ngOnInit = function () {
        this.question_id = this._route.snapshot.params.question_id;
        this.showPage();
    };
    AnswersComponent.prototype.showPage = function () {
        var _this = this;
        this._questionService.findById(this.question_id).subscribe(function (question) { return _this.question = question.json(); }, function (error) { return console.log(error); });
    };
    // get the particular answer and pass that along to the back end
    AnswersComponent.prototype.likeAnswer = function (answer) {
        var _this = this;
        this._answerService.likeAnswer(answer).subscribe(function (answer) { return _this.answer = answer.json(); }, function (error) { return console.log(error); });
        location.reload();
    };
    AnswersComponent = __decorate([
        core_1.Component({
            selector: 'app-answers',
            template: __webpack_require__("../../../../../src/app/answers/answers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answers/answers.component.css")]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService, router_1.ActivatedRoute, answer_service_1.AnswerService])
    ], AnswersComponent);
    return AnswersComponent;
}());
exports.AnswersComponent = AnswersComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var question_component_1 = __webpack_require__("../../../../../src/app/question/question.component.ts");
var questions_component_1 = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
var answer_component_1 = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var answers_component_1 = __webpack_require__("../../../../../src/app/answers/answers.component.ts");
var routes = [
    { path: '', component: user_component_1.UserComponent },
    { path: '', component: questions_component_1.QuestionsComponent },
    { path: 'questions', component: questions_component_1.QuestionsComponent },
    { path: 'addNewQuestion', component: question_component_1.QuestionComponent },
    { path: 'addNewAnswer/:question_id', component: answer_component_1.AnswerComponent },
    { path: 'showAnswers/:question_id', component: answers_component_1.AnswersComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/answer/answer.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/question/question.service.ts");
var questions_component_1 = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
var question_component_1 = __webpack_require__("../../../../../src/app/question/question.component.ts");
var answers_component_1 = __webpack_require__("../../../../../src/app/answers/answers.component.ts");
var answer_component_1 = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var ng2_search_filter_1 = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                questions_component_1.QuestionsComponent,
                question_component_1.QuestionComponent,
                answers_component_1.AnswersComponent,
                answer_component_1.AnswerComponent,
                user_component_1.UserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                ng2_search_filter_1.Ng2SearchPipeModule
            ],
            providers: [
                user_service_1.UserService,
                answer_service_1.AnswerService,
                question_service_1.QuestionService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/models/answer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "../../../../../src/app/models/question.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\n    color: red;\n    font-style: italic;\n}\n#logout{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/questions']\">Home</button>\n<button [routerLink]=\"['/addNewQuestion']\">Add a question</button>\n<button [routerLink]=\"['']\" id=\"logout\">Logout</button>\n\n<h1>New Question</h1>\n\n<form (submit)=\"createQuestion()\">\n  Question:\n  <div *ngIf=\"!content.valid\" class=\"error\">Question must have at least 10 characters.</div>\n  <p>\n    <textarea \n      required\n      name=\"question.content\" \n      rows=\"2\" cols=\"30\" \n      [(ngModel)]=\"question.content\" \n      minlength=\"10\" \n      #content=\"ngModel\"\n      ></textarea>\n  </p>\n  Description (optional):\n  <p>\n    <textarea name=\"question.description\" rows=\"2\" cols=\"30\" [(ngModel)]=\"question.description\"></textarea>\n  </p>\n  <p><button [routerLink]=\"['/questions']\">Cancel</button> <input type=\"submit\" value=\"Ask a question!\"></p>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_service_1 = __webpack_require__("../../../../../src/app/question/question.service.ts");
var question_1 = __webpack_require__("../../../../../src/app/models/question.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(qs, router) {
        this.router = router;
        this.errors = [];
        this.qs = qs;
        this.question = new question_1.Question();
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.createQuestion = function () {
        var _this = this;
        this.qs.create(this.question).subscribe(function (question) { return question.json(); }, function (err) { return _this.errors.push(err); });
        if (this.errors.length === 0) {
            this.router.navigate(['/questions']);
        }
        else {
            this.router.navigate(['/addNewQuestion']);
        }
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService,
            router_1.Router])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;


/***/ }),

/***/ "../../../../../src/app/question/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.create = function (question) {
        return this._http.post('/newQuestion', question);
    };
    QuestionService.prototype.findAll = function () {
        return this._http.get('/displayQuestions');
    };
    QuestionService.prototype.findById = function (id) {
        return this._http.get('/showQuestion/' + id);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-con{\n    background-color: aqua;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntable, td, th {\n    border: 1px solid black;\n    padding: 4px;\n}\n\n#logout{\n    float:right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"color-con\">\n    <div>\n        <button [routerLink]=\"['/questions']\">Home</button>\n        <button [routerLink]=\"['/addNewQuestion']\">Add a question</button>\n        <button [routerLink]=\"['']\" id=\"logout\">Logout</button>\n    </div>\n    <div>\n        <h2>Welcome {{user?.username}}!</h2>\n        <p><input type=\"text\" [(ngModel)]=\"question\" placeholder=\"Search Questions\"></p>\n    </div>\n    <div>\n        <table>\n            <th>Question</th>\n            <th>Answers</th>\n            <tr *ngFor = \"let question of questions | filter:question\" >\n                <td>{{question.content}}</td>\n                <td>{{ question._answers.length }}</td>\n                <td><a [routerLink]=\"['/showAnswers', question._id]\">Show</a></td>\n                <td><a [routerLink]=\"['/addNewAnswer', question._id]\">Answer</a></td>\n            </tr>\n        </table>  \n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_service_1 = __webpack_require__("../../../../../src/app/question/question.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(qs, us, router) {
        this.qs = qs;
        this.us = us;
        this.router = router;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getQuestions();
        this.us.session(function (data) {
            if (data.errors) {
                _this.router.navigate(['/']);
            }
            else {
                _this.user = data;
            }
        });
    };
    QuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.qs.findAll().subscribe(function (questions) { return _this.questions = questions.json(); }, function (error) { return console.log(error); });
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService,
            user_service_1.UserService,
            router_1.Router])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\n    color: red;\n    font-size: 12px;\n}\n\n.flex-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: DodgerBlue;\n    margin: 10px;\n    padding: 20px;\n    font-size: 20px; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Q&A</h2>\n<div class=\"flex-container\">\n<div class=\"flex\">\n<h3>Registration</h3>\n\n<div *ngIf=\"user.errors\">\n  <h3 *ngFor=\"let err of user.errors\" class=\"error\">{{ err.message }}</h3>\n</div>\n<form (submit)=\"register()\">\n  <table>\n    <tr>\n      <td>Username:</td>\n      <td><input type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\"></td>\n    </tr>\n    <tr>\n      <td>Password:</td>\n      <td><input type=\"password\" name=\"user.password\" [(ngModel)]=\"user.password\"></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input type=\"submit\" value=\"Register\"></td>\n    </tr>\n  </table>  \n</form>\n</div>\n\n\n\n<div class=\"flex\">\n <h3>Login</h3>\n  <h3 *ngIf=\"loggedIn.errors\" class=\"error\">{{loggedIn.errors}}</h3>\n\n  <form (submit)=\"login()\">\n    <table>\n      <tr>\n        <td>Username:</td>\n        <td><input type=\"text\" name=\"loggedIn.username\" [(ngModel)]=\"loggedIn.username\"></td>\n      </tr>\n      <tr>\n        <td>Password:</td>\n        <td><input type=\"password\" name=\"loggedIn.password\" [(ngModel)]=\"loggedIn.password\"></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><input type=\"submit\" value=\"Login\"></td>\n      </tr>\n    </table>\n  </form>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(us, router) {
        this.us = us;
        this.router = router;
    }
    UserComponent.prototype.init = function () {
        this.user = {
            username: '',
            password: '',
            errors: []
        };
        this.loggedIn = {
            username: '',
            password: '',
            errors: ''
        };
    };
    UserComponent.prototype.ngOnInit = function () {
        this.init();
        this.us.logout();
    };
    UserComponent.prototype.register = function () {
        var _this = this;
        this.us.register(this.user, function (data) {
            if (data.errors) {
                var errs = [];
                for (var _i = 0, _a = data.errors; _i < _a.length; _i++) {
                    var err = _a[_i];
                    errs.push(data.errors[err]);
                }
                _this.user.errors = errs;
            }
            else {
                _this.init();
                _this.router.navigate(['/questions']);
            }
        });
    };
    UserComponent.prototype.login = function () {
        var _this = this;
        this.us.login(this.loggedIn, function (data) {
            if (data.errors) {
                _this.loggedIn.errors = data.errors;
                console.log(data.errors);
            }
            else {
                _this.init();
                _this.router.navigate(['/questions']);
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (user, callback) {
        this._http.post('/register', user)
            .subscribe(function (data) { return callback(data); });
    };
    UserService.prototype.login = function (user, callback) {
        this._http.post('/login', user)
            .subscribe(function (data) { return callback(data); }, function (err) { return callback(err); });
    };
    UserService.prototype.session = function (callback) {
        this._http.get('/session')
            .subscribe(function (data) { return callback(data); });
    };
    UserService.prototype.logout = function () {
        this._http.get('/logout').subscribe();
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map