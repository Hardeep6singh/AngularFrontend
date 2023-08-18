import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { IArticle } from 'src/app/models/iarticle';
import { NewsService } from 'src/app/services/news.service';
import { CountrySelectionService } from 'src/app/services/country-selection.service';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,HttpClientModule,NavComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  selectedCountryCode: string = 'US'; 
  newsData: IArticle[] = [];
  defaultImage = 'https://via.placeholder.com/718x376.94';

   // Replace with your actual NewsAPI key

   constructor(private countrySelectionService: CountrySelectionService, private _newsService: NewsService) {
    console.log(this.selectedCountryCode);
    this.countrySelectionService.selectedCountry$.subscribe((country) => {
      if(country != ''){
      this.selectedCountryCode = country;
      }
      console.log(this.selectedCountryCode)
      this.fetchNewsArticles();
    });
  }


  fetchNewsArticles() {
    this._newsService.getArticles(this.selectedCountryCode).subscribe((data) => {
      this.newsData = data;
    });
  }

   saveArticle(article: IArticle) {
    this._newsService.saveArticle(article)
      .subscribe(
        () => {
          alert('Article saved successfully');
        },
        (error) => {
          alert('Already Added');
          console.log(error);
        }
      );
  }
}
