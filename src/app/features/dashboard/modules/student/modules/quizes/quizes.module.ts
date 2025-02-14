import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './quizes.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';

@NgModule({
  declarations: [QuizesComponent, ViewQuizComponent],
  imports: [CommonModule, QuizesRoutingModule, SharedModule],
})
export class QuizesModule {}
