import { Injectable } from '@angular/core';
import { IArticle } from '../models/iarticle';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap, map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = '0a4e83d203ff4ae4977ca2fa1a5dc15c';
  private saveNewsUrl = 'https://reactbackend-iaxc.onrender.com/api/auth/savenews';
  constructor(private http: HttpClient) { }
  
  getArticles(countryCode: string): Observable<IArticle[]> {
    return this.http.get<{ status: string, totalResults: number, articles: IArticle[] }>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${this.apiKey}`)
      .pipe(
        map(response => response.articles)
      );
  }
  
  saveArticle(article: IArticle) {
    const currentDate = new Date();
    const articleWithDate = {
      ...article,
      savedAt: currentDate.toISOString()
    };

    return this.http.post(this.saveNewsUrl, articleWithDate)
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        })
      );
  }


}
