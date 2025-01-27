import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/services/shared-service/shared.service';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { IStudent } from './modules/quizes/interfaces/istudent';
import { IQuiz } from './modules/quizes/interfaces/iquiz';
import { QuizesService } from './modules/quizes/services/quizes.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewItemComponent } from './components/view-item/view-item.component';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.scss',
})
export class InstructorComponent implements OnInit, OnDestroy {
  private _DashboardService = inject(DashboardService);
  private _QuizesService = inject(QuizesService);
  dialog = inject(MatDialog);
  studentsSub!: Subscription;
  quizSub!: Subscription;
  studentList: IStudent[] = [];
  studentDetails: IStudent = {} as IStudent;
  quizList: IQuiz[] = [];
  quizDetails: IQuiz = {} as IQuiz;
  ngOnInit(): void {
    this.getFiveIncomingQuiz();
    this.getTopFiveStudents();
  }
  getTopFiveStudents(): void {
    this.studentsSub = this._DashboardService.onGetTopFiveStudents().subscribe({
      next: (res) => {
        this.studentList = res;
        // console.log(this.studentList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getFiveIncomingQuiz(): void {
    this.quizSub = this._DashboardService.onGetFiveIncomingQuiz().subscribe({
      next: (res) => {
        this.quizList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getStudentByID(id: string): void {
   this._DashboardService.onGetStudentById(id).subscribe({
    next: (res)=> {
      this.studentDetails = res
      console.log(this.studentDetails);
    }, error:(err)=> {
      console.log(err);
    }, complete:()=> {
       this.dialog.open(ViewItemComponent, {
        data : {
          data: this.studentDetails,
          title: 'Student'
        },
      });
    }
   })
  }
  getQuizById(id: string): void {
    this._QuizesService.onGetQuizById(id).subscribe({
      next: (res) => {
        this.quizDetails = res
        console.log(this.quizDetails);
        this.quizDetails = res;
      },error:(err)=> {
        console.log(err);

      }, complete: ()=> {
        this.dialog.open(ViewItemComponent, {
          data : {
            data: this.quizDetails,
            title: 'Quiz'
          },
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.studentsSub.unsubscribe();
    this.quizSub.unsubscribe();
  }
}
