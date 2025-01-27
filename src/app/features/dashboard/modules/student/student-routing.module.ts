import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [{ path: '', redirectTo: 'quizzes', pathMatch: 'full' },
{ path: 'quizzes', component: StudentComponent },
{ path: 'results', loadChildren: () => import('./modules/student-results/student-results.module').then(m => m.StudentResultsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
