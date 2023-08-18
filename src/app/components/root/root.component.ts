import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,NavComponent],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {

}
