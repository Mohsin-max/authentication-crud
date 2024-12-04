import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // private baseUrl: any = "http://localhost:3000/users";
  private baseUrl: any = "https://gainful-stealth-neon.glitch.me/users";

  postUserData(userData: User): Observable<User> {

    return this.http.post<User>(this.baseUrl,userData)
  }

  getLoggedInUser(username:string,password:string):Observable<User[]>{

    return this.http.get<User[]>(`${this.baseUrl}?username=${username}&&password=${password}`)
  }


}
