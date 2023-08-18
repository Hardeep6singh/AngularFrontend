import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountrySelectionService {
  private selectedCountrySubject = new BehaviorSubject<string>('');
  selectedCountry$: Observable<string> = this.selectedCountrySubject.asObservable();

  setSelectedCountry(countryCode: string) {
    this.selectedCountrySubject.next(countryCode);
  }
}
