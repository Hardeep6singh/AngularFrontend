import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { CountrySelectionService } from '../../services/country-selection.service';
interface CountryCodeMap {
  [countryCode: string]: string;
}
@Component({
  selector: 'app-nav-dropdown',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css'],
})

export class NavDropdownComponent {

  countryCodes:CountryCodeMap = {
    'United Arab Emirates': 'ae',
    'Argentina': 'ar',
    'Austria': 'at',
    'Australia': 'au',
    'Belgium': 'be',
    'Bulgaria': 'bg',
    'Brazil': 'br',
    'Canada': 'ca',
    'Switzerland': 'ch',
    'China': 'cn',
    'Colombia': 'co',
    'Cuba': 'cu',
    'Czech Republic': 'cz',
    'Germany': 'de',
    'Egypt': 'eg',
    'France': 'fr',
    'United Kingdom': 'gb',
    'Greece': 'gr',
    'Hong Kong': 'hk',
    'Hungary': 'hu',
    'Indonesia': 'id',
    'Ireland': 'ie',
    'Israel': 'il',
    'India': 'in',
    'Italy': 'it',
    'Japan': 'jp',
    'South Korea': 'kr',
    'Lithuania': 'lt',
    'Latvia': 'lv',
    'Morocco': 'ma',
    'Mexico': 'mx',
    'Malaysia': 'my',
    'Nigeria': 'ng',
    'Netherlands': 'nl',
    'Norway': 'no',
    'New Zealand': 'nz',
    'Philippines': 'ph',
    'Poland': 'pl',
    'Portugal': 'pt',
    'Romania': 'ro',
    'Serbia': 'rs',
    'Russia': 'ru',
    'Saudi Arabia': 'sa',
    'Sweden': 'se',
    'Singapore': 'sg',
    'Slovakia': 'sk',
    'Thailand': 'th',
    'Turkey': 'tr',
    'Taiwan': 'tw',
    'Ukraine': 'ua',
    'United States': 'us',
    'Venezuela': 've',
    'South Africa': 'za'
  };

  countryNames: string[] = Object.keys(this.countryCodes);
 

  constructor(private countrySelectionService: CountrySelectionService) {}

  selectCountry(country: string) {
    const countryCode: string = this.countryCodes[country];
    this.countrySelectionService.setSelectedCountry(countryCode);
  }
}
