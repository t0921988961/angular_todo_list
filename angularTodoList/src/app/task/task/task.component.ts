import { Component, OnInit } from '@angular/core';

import { TaskState } from '../../enum/task-state';
import { Task } from "../../model/task"

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Task;
  TaskState = TaskState;

  constructor(

  ) {

  }

  ngOnInit(): void {
    this.task = new Task("Need task");
    console.log('this.task:', this.task)
    console.log('this.TaskState:', this.TaskState)

  }


  getStateDesc(): string {
    switch (this.task.state) {
      case TaskState.None:
        return "未完成"
      case TaskState.Doing:
        return "進行中"
      case TaskState.Finish:
        return "已完成"
    }
  }

  getStateColor(): any {
    switch (this.task.state) {
      case TaskState.Doing:
        return "color: green";
      case TaskState.Finish:
        return "color: blue";
    }
  }

  onSetTaskState(state: TaskState): void {
    console.log('state:', state);
    this.task.state = state;
  }
}
