import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ISavedArticle } from '../../models/isavedArticle'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-saved-news',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.css']
})
export class SavedNewsComponent implements OnInit {
  newsData: ISavedArticle[]=[];
  defaultImage = 'https://via.placeholder.com/718x376.94';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSavedArticles().subscribe((data) => {
      this.newsData = data;
     } );
  }
}
