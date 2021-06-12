import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { user } from 'src/app/model/user';
import { TestService } from 'src/app/services/test.service';
import { AppState, selectAuthStatusState } from 'src/app/store/selector/selector';
import { InfoLoad, userLoad } from "./../../store/actions/userActions";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  users: user[] = [
    {
      name: "kumar",
      rollno: 45,
      department: "CSE",
    },
    {
      name: "Raj",
      rollno: 46,
      department: "ECE",
    },
  ]; 

  constructor(private userService: TestService, private store: Store<AppState>) { }

  ngOnInit(): void {
      this.store.dispatch(new userLoad(this.users));
      this.store.dispatch(new InfoLoad('Dispatch Info Data'));
  }

}
