import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = "List of Courses";
  courses: string[];
  colSpan = 2;
  isActive: boolean = true;

  constructor(service: CoursesService) {

    this.courses = service.getCourses();

  }

  ngOnInit() {
  }

  onSave($event) {
    $event.stopPropagation();  //Prevents elements that this button is inside of from firing their click events
    let btnId: string = ($event.target as Element).id;  // js solution $event.target.attributes.id;
    console.log("Button ID: ", btnId);
    console.log("Save button was clicked" + $event, $event);
  }
  onDivClicked() {
    console.log('Div was clicked');
  }

}
