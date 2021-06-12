import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import * as userDetails from "./../app/store/reducers/userReducers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userDetails.userDetailsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
