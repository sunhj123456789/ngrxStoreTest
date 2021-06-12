import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { user } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class TestService {
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
  constructor() {}
  getUsers(): Observable<user[]> {
    return of(this.users);
  }
}
