import { BrowserModule } from "@angular/platform-browser";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import * as userDetails from "./../app/store/reducers/userReducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { Route, RouterModule, Routes } from "@angular/router";
import { TestService } from "./services/test.service";
import { reducers } from "./store/selector/selector";


const ROUTE: Routes = [
  { path: 'child', 
  loadChildren:() => import('./child/child.module').then(m => m.ChildModule)
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot( reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
    RouterModule.forRoot(ROUTE)
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        TestService
      ]
    };
  }
}
