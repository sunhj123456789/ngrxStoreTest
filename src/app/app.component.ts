import { Component, OnInit } from "@angular/core";
import { TestService } from "./services/test.service";
import { Store } from "@ngrx/store";
import { userLoad } from "./store/actions/userActions";
import { AppState, selectAuthState, selectAuthStatusState } from "./store/selector/selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "testngRx";
  constructor(private userService: TestService, private store: Store<AppState>) {}

  ngOnInit() {
      this.store.select(selectAuthStatusState).subscribe((item) => {
        if(item) {console.log(item)};
    })
 }
}
