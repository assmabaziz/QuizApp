import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesComponent } from './quizes.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { AllQuizesComponent } from './components/all-quizes/all-quizes.component';

const routes: Routes = [
  { path: '', component: QuizesComponent },
  { path: 'view-quiz', component: ViewQuizComponent },
  {
    path: 'question-bank',
    loadChildren: () =>
      import('./modules/question-bank/question-bank.module').then(
        (m) => m.QuestionBankModule
      ),
  },
  { path: 'view-all-quizes', component: AllQuizesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizesRoutingModule {}
