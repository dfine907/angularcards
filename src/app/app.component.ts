import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularcards';
}
