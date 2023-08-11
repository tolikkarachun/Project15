import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  public progress = "35%"
  public tasks = [
    {
      id: 1,
      title: "Daily astromeditation",
      count: 3
    },
    {
      id: 2,
      title: "Daily sleep astromeditation",
      count: 1
    },
    {
      id: 3,
      title: "Daily mantra",
      count: 2
    }
  ]
}
