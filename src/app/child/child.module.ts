import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { StoreModule } from '@ngrx/store';
import * as userDetails from "./../store/reducers/userReducers";
import { Route, RouterModule, Routes } from "@angular/router";
import { TestService } from '../services/test.service';
import { reducers } from '../store/selector/selector';

const routes: Routes = [
  {path: '', component: ChildComponent}
];

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
      //  StoreModule.forFeature('child',reducers),
           RouterModule.forChild(routes)
  ],
  providers:[]
})
export class ChildModule { }
