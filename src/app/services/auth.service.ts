import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { single, tap } from 'rxjs/operators';
import { ISavedArticle} from '../models/isavedArticle';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private urlLogin: string = 'https://reactbackend-iaxc.onrender.com/api/auth/login';
  private urlRegister: string = 'https://reactbackend-iaxc.onrender.com/api/auth/register';

  constructor(private http: HttpClient) {
    this.myToken = localStorage.getItem('authToken')!;
    
    this._isLoggedIn$.next(!!this.myToken);
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.urlLogin, {
        email: email,
        password: password,
      },{ observe: 'response' })
      .pipe(
        tap((response: HttpResponse<any>) => {
          const token : string = response.headers.get('authorization') || '';
         
          this._isLoggedIn$.next(true);

          localStorage.setItem('authToken', token);
          console.log(token);
         
          
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);

    localStorage.removeItem('authToken');
  }

  register(firstName: string, lastName: string, email: string, contact: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.urlRegister, {
        firstName: firstName,
        lastName : lastName,
        email: email,
        contact:contact,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }
  getSavedArticles(): Observable<ISavedArticle[]> {
    const headers = new HttpHeaders({
      Authorization: `${this.myToken}`
    });

    return this.http.get<ISavedArticle[]>('https://reactbackend-iaxc.onrender.com/api/auth/news', { headers });
  }
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'x-auth-token': this.myToken!,
//     }),
//   };
//   getTodos() {
//     return this.http.get<ITodo>(
//       'http://localhost:5000/api/todos',
//       this.httpOptions
//     );
//   }
 }
