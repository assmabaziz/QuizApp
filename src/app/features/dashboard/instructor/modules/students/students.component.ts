import { Component, OnInit } from '@angular/core';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  groups: any[] = [];
  constructor(private _StudentsService: StudentsService) {}
  ngOnInit(): void {
    this._StudentsService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.groups = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
