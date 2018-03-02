import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { UserService } from './user/user.service';
import { AnswerService } from './answer/answer.service';
import { QuestionService } from './question/question.service';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';
import { AnswerComponent } from './answer/answer.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    AnswersComponent,
    AnswerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    UserService,
    AnswerService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
