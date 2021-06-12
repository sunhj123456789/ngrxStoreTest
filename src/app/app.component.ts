import { Component, OnInit } from "@angular/core";
import { TestService } from "./services/test.service";
import { Store } from "@ngrx/store";
import { State } from "./store/reducers/userReducers";
import { userLoad } from "./store/actions/userActions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "testngRx";
  constructor(private userService: TestService, private store: Store<State>) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((userDetails) => {
      console.log(userDetails);
      this.store.dispatch(new userLoad(userDetails));
    });
  }
}
