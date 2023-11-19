import { Component,Input } from '@angular/core';
import { People } from '../../models/people-item.interface';


@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent {
@Input() persona!: People;

}
