import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
public reports = [
    {
      id: 1,
      icon: "person_outline",
      about: "Astro- psychological report",
      desc: "Some short description of this type of report."
    },
    {
      id: 2,
      icon: "calendar_today",
      about: "Monthly prediction report",
      desc: "Some short description of this type of report."
    },
    {
      id: 3,
      icon: "domain_verification",
      about: "Daily Prediction",
      desc: "Some short description of this type of report."
    },
    {
      id: 4,
      icon: "favorite_border",
      about: "Love report",
      desc: "Some short description of this type of report."
    }
  ]
}
