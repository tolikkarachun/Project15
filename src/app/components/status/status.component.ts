import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  public status = [
{
  id: 2,
  icon: 'calendar_today',
  title: "How was your day?",
  desc: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en urna ultrice...",

},
{
  id: 1,
  icon: 'schedule',
  title: "Current Transist: 3rd House",
  desc: "This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...",

}
]
}
