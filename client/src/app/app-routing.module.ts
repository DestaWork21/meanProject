import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answer/answer.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: '', component: QuestionsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'addNewQuestion', component: QuestionComponent },
  { path: 'addNewAnswer/:question_id', component: AnswerComponent},
  { path: 'showAnswers/:question_id', component: AnswersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
