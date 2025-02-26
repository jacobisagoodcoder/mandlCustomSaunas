import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mandl Custom Saunas';
  
  toggleMenu(): void {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('active');
  }
}

